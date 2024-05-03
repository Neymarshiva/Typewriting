using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TypeWriting.Domain.Entities;
using System.Security.Claims;

namespace TypeWriting.Infrastructure.Identity;

public class IdentityService : IIdentityService
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IUserClaimsPrincipalFactory<ApplicationUser> _userClaimsPrincipalFactory;
    private readonly IAuthorizationService _authorizationService;
    private readonly SignInManager<ApplicationUser> _signInManager;

    public IdentityService(
        UserManager<ApplicationUser> userManager,
        IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory,
        IAuthorizationService authorizationService, SignInManager<ApplicationUser> signInManager)
    {
        _userManager = userManager;
        _userClaimsPrincipalFactory = userClaimsPrincipalFactory;
        _authorizationService = authorizationService;
        _signInManager = signInManager;
    }

    public async Task<string?> GetUserNameAsync(string userId)
    {
        var user = await _userManager.Users.FirstAsync(u => u.Id == userId);

        return user.UserName;
    }

    public async Task<ApplicationUser?> GetUser(string userId)
    {
        var user = await _userManager.Users.FirstAsync(u => u.Id == userId);

        return user;
    }

    public async Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password)
    {
        var user = new ApplicationUser
        {
            UserName = userName,
            Email = userName,
        };

        var result = await _userManager.CreateAsync(user, password);

        return (result.ToApplicationResult(), user.Id);
    }
    public async Task<Result> UpdateUserAsync(string newUserName, string newEmail, string newPhoneNumber, string CompanyName, string CountryCulture, string State)
    {
        var user = await _userManager.FindByEmailAsync(newEmail);

        if (user == null)
        {
            return Result.Failure(new List<string> { "User does not exist." });
        }
        user.UserName = newUserName;
        user.Email = newEmail;
        user.CountryCulture = CountryCulture;
        user.State = State;
        user.CompanyName = CompanyName;
        user.PhoneNumber = newPhoneNumber;

        var newClaims = new[]
              {
                new Claim(ClaimTypes.MobilePhone, user.PhoneNumber ?? string.Empty),
                new Claim(ClaimTypes.Country, user.CountryCulture ?? string.Empty),
                new Claim("CompanyName", user.CompanyName ?? string.Empty),
                new Claim("State", user.State ?? string.Empty)
            };

        var existingClaims = await _userManager.GetClaimsAsync(user);

        // Remove existing claims that need to be updated or removed
        foreach (var claim in existingClaims)
        {
            // Example: Remove claims with specific types
            if (claim.Type == ClaimTypes.MobilePhone || claim.Type == ClaimTypes.Country ||
                claim.Type == "CompanyName" || claim.Type == "State")
            {
                await _userManager.RemoveClaimAsync(user, claim);
            }
        }

        // Add or update new claims
        foreach (var newClaim in newClaims)
        {
            await _userManager.AddClaimAsync(user, newClaim);
        }


        var updateResult = await _userManager.UpdateAsync(user); 
        await _signInManager.RefreshSignInAsync(user);

        if (updateResult.Succeeded)
        {
            return Result.Success();
        }
        else
        {
            return updateResult.ToApplicationResult();
        }
    }

    public async Task<bool> IsInRoleAsync(string userId, string role)
    {
        var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

        return user != null && await _userManager.IsInRoleAsync(user, role);
    }

    public async Task<bool> AuthorizeAsync(string userId, string policyName)
    {
        var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

        if (user == null)
        {
            return false;
        }

        var principal = await _userClaimsPrincipalFactory.CreateAsync(user);

        var result = await _authorizationService.AuthorizeAsync(principal, policyName);

        return result.Succeeded;
    }

    public async Task<Result> DeleteUserAsync(string userId)
    {
        var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

        return user != null ? await DeleteUserAsync(user) : Result.Success();
    }

    public async Task<Result> DeleteUserAsync(ApplicationUser user)
    {
        var result = await _userManager.DeleteAsync(user);

        return result.ToApplicationResult();
    }
    public async Task<Result> UpdatePasswordAsync(ApplicationUser user,string oldPassword, string newPassword)
    {
        var result =  await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);

        return result.ToApplicationResult();
    }


    public async Task<bool> LogoutAsync()
    {
        // Sign out the user
        await _signInManager.SignOutAsync();

        // Get the current user
        var user = await _userManager.GetUserAsync(_signInManager.Context.User);
        if (user != null)
        {
            // Retrieve all claims associated with the user
            var existingClaims = await _userManager.GetClaimsAsync(user);

            // Remove all claims associated with the user
            var removeAllClaimsResult = await _userManager.RemoveClaimsAsync(user, existingClaims);
            if (!removeAllClaimsResult.Succeeded)
            {
                // Handle the case where removing claims failed
                // You can log an error or take appropriate action
                return false;
            }
        }

        return true;
    }


}
