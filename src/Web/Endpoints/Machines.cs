using TypeWriting.Application.Common.Models;
using TypeWriting.Application.Machine.Commands.CreateMachines;
using TypeWriting.Application.Machine.Commands.DeleteMachines;
using TypeWriting.Application.Machine.Commands.UpdateMachines;
using TypeWriting.Application.Machine.Queries.GetMachines;
using TypeWriting.Application.TodoItems.Commands.CreateTodoItem;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;
using TypeWriting.Application.TodoLists.Commands.DeleteTodoList;
using TypeWriting.Application.TodoLists.Commands.UpdateTodoList;

namespace TypeWriting.Web.Endpoints;

public class Machines : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapGet(GetMachines)
            .MapPost(CreateMachines)
            .MapPut(UpdateMachines, "{id}")
            .MapDelete(DeleteMachines, "{id}");
    }

    public async Task<List<MachinesDto>> GetMachines(ISender sender)
    {
        return await sender.Send(new GetMachinesQuery());
    }
    public async Task<int> CreateMachines(ISender sender, CreateMachinesCommand command)
    {
        return await sender.Send(command);
    }

    public async Task<IResult> UpdateMachines(ISender sender, int id, UpdateMachinesCommand command)
    {
        if (id != command.Id) return Results.BadRequest();
        await sender.Send(command);
        return Results.NoContent();
    }
    public async Task<IResult> DeleteMachines(ISender sender, int id)
    {
        await sender.Send(new DeleteMachinesCommand(id));
        return Results.NoContent();
    }
}
