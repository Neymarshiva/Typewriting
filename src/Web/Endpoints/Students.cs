using TypeWriting.Application.Common.Models;
using TypeWriting.Application.Machine.Commands.DeleteMachines;
using TypeWriting.Application.Student.Command.CreateStudent;
using TypeWriting.Application.Student.Command.DeleteStudent;
using TypeWriting.Application.Student.Command.UpdateStudent;
using TypeWriting.Application.Student.Queries.GetStudentWithPagination;
using TypeWriting.Application.TodoItems.Commands.CreateTodoItem;
using TypeWriting.Application.TodoItems.Commands.UpdateTodoItem;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;

namespace TypeWriting.Web.Endpoints;

public class Students : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapGet(GetStudentsWithPagination)
            .MapPost(CreateStudents)
            .MapPut(UpdateStudents, "{id}")
            .MapDelete(DeleteStudents, "{id}"); ;
    }

    public async Task<PaginatedList<StudentsBriefDto>> GetStudentsWithPagination(ISender sender, [AsParameters] GetStudentWithPaginationQuery query)
    {
        return await sender.Send(query);
    }
    public async Task<int> CreateStudents(ISender sender, CreateStudentCommand command)
    {
        return await sender.Send(command);
    }
    public async Task<IResult> UpdateStudents(ISender sender, int id, UpdateStudentCommand command)
    {
        if (id != command.Id) return Results.BadRequest();
        await sender.Send(command);
        return Results.NoContent();
    }
    public async Task<IResult> DeleteStudents(ISender sender, int id)
    {
        await sender.Send(new DeleteStudentCommand(id));
        return Results.NoContent();
    }
}
