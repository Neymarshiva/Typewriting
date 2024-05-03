using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Common.Models;
using TypeWriting.Application.Machine.Commands.UpdateMachines;

namespace TypeWriting.Application.Identity.Command.UpdateIdentity;


public record UpdateIdentityCommand : IRequest<Result>
{
    public string? UserName { get; init; }
    public string? Email { get; init; }
    public string? PhoneNumber { get; init; }
    public string? CompanyName { get; init; }
    public string? CountryCulture { get; init; }
    public string? State { get; init; }
}

public class UpdateIdentityCommandHandler : IRequestHandler<UpdateIdentityCommand, Result>
{
    private readonly IIdentityService _identityService;

    public UpdateIdentityCommandHandler(IIdentityService identityService)
    {
        _identityService = identityService;
    }
    public async Task<Result> Handle(UpdateIdentityCommand request, CancellationToken cancellationToken)
    {
        if (request == null)
        {
            throw new ArgumentNullException(nameof(request));
        }

        if (request.UserName == null || request.Email == null || request.PhoneNumber == null || request.CompanyName == null || request.CountryCulture == null || request.State == null)
        {
            throw new ArgumentNullException("One or more properties in the request are null.");
        }

        return await _identityService.UpdateUserAsync(request.UserName, request.Email, request.PhoneNumber, request.CompanyName, request.CountryCulture, request.State);
    }

}
