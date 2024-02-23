using NuGet.Protocol.Plugins;
using TypeWriting.Application.Identity.Command.LogoutIdentity;
using TypeWriting.Application.Machine.Queries.GetMachines;
using ISender = MediatR.ISender;

namespace TypeWriting.Web.Endpoints;

public class Identity : EndpointGroupBase
{ 
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapPost(Logout);
    }
    public async Task<bool> Logout(ISender sender)
    { 
        return await sender.Send(new LogoutIdentityCommand()); 
    }
}
