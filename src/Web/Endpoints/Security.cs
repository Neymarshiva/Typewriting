using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using TypeWriting.Application.Common.Models;
using TypeWriting.Application.Identity.Command.UpdatePasswordIdentity;

namespace TypeWriting.Web.Endpoints;

public class Security : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapPost(UpdateCurrentUserPassword);
    }
    public async Task<Result> UpdateCurrentUserPassword(ISender sender, UpdatePasswordIdentityCommand command)
    {
        var result = await sender.Send(command);
        return result;
    }

}
