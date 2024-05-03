using TypeWriting.Application.Common.Models;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Application.Common.Interfaces;

public interface IIdentityService
{   
    Task<string?> GetUserNameAsync(string userId);

    Task<bool> IsInRoleAsync(string userId, string role);

    Task<bool> AuthorizeAsync(string userId, string policyName);

    Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password);
    Task<Result> UpdateUserAsync(string newUserName, string newEmail, string newPhoneNumber, string CompanyName, string CountryCulture, string State);

    Task<Result> DeleteUserAsync(string userId);
    Task<bool> LogoutAsync();
    Task<Result> UpdatePasswordAsync(ApplicationUser user, string oldPassword, string newPassword);
    Task<ApplicationUser?> GetUser(string userId);
}
