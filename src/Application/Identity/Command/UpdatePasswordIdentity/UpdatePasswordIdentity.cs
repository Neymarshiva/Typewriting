using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Common.Models;
using TypeWriting.Application.Identity.Command.UpdateIdentity;

namespace TypeWriting.Application.Identity.Command.UpdatePasswordIdentity;
public record UpdatePasswordIdentityCommand : IRequest<Result>
{
    public string OldPassword { get; init; } = string.Empty;
    public string NewPassword { get; init; } = string.Empty;
}

public class UpdatePasswordIdentityCommandHandler : IRequestHandler<UpdatePasswordIdentityCommand, Result>
{
    private readonly IIdentityService _identityService;
    private readonly IUser _user;

    public UpdatePasswordIdentityCommandHandler(IIdentityService identityService, IUser user)
    {
        _identityService = identityService;
        _user = user;
    }
    public async Task<Result> Handle(UpdatePasswordIdentityCommand request, CancellationToken cancellationToken)
    {
        var currentUserId = _user.Id ?? string.Empty;
        var currentUser = await _identityService.GetUser(currentUserId);
        if (currentUser == null)
        {
            throw new UnauthorizedAccessException();
        }
        return await _identityService.UpdatePasswordAsync(currentUser, request.OldPassword, request.NewPassword);
    }

}
