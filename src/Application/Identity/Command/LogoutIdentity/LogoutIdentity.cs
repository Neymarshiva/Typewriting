using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoItems.Commands.CreateTodoItem;

namespace TypeWriting.Application.Identity.Command.LogoutIdentity;
public record LogoutIdentityCommand : IRequest<bool>;



public class LogoutIdentityCommandHandler : IRequestHandler<LogoutIdentityCommand, bool>
{
    private readonly IIdentityService _identityService;

    public LogoutIdentityCommandHandler(IIdentityService identityService)
    {
        _identityService = identityService;
    }
    public async Task<bool> Handle(LogoutIdentityCommand request, CancellationToken cancellationToken)
    {
        return await _identityService.LogoutAsync();
    }
}
