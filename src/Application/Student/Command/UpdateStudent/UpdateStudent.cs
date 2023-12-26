using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoItems.Commands.UpdateTodoItem;
using TypeWriting.Domain.Enums;

namespace TypeWriting.Application.Student.Command.UpdateStudent;
public record UpdateStudentCommand : IRequest
{
    public int Id { get; init; }
    public int MachinesId { get; init; }
    public int BatchTimingsId { get; init; }
    public string? FirstName { get; init; }
    public string? LastName { get; init; }
    public string? Email { get; init; }
    public long MobileNumber { get; init; }
    public Gender Gender { get; init; }
    public string? Address { get; init; }
}

public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand>
{
    private readonly IApplicationDbContext _context;

    public UpdateStudentCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Students
            .FindAsync(new object[] { request.Id }, cancellationToken);

        Guard.Against.NotFound(request.Id, entity);

        entity.MachinesId = request.MachinesId;
        entity.BatchTimingsId = request.BatchTimingsId;
        entity.FirstName = request.FirstName;
        entity.LastName = request.LastName;
        entity.Email = request.Email;
        entity.MobileNumber = request.MobileNumber;
        entity.Gender = request.Gender;
        entity.Address = request.Address;
        await _context.SaveChangesAsync(cancellationToken);
    }
}
