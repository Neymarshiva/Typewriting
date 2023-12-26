using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoItems.Commands.CreateTodoItem;
using TypeWriting.Domain.Entities;
using TypeWriting.Domain.Enums;
using TypeWriting.Domain.Events;

namespace TypeWriting.Application.Student.Command.CreateStudent;
public record CreateStudentCommand : IRequest<int>
{
    public int MachinesId { get; init; }
    public int BatchTimingsId { get; init; }
    public string? FirstName { get; init; }
    public string? LastName { get; init; }
    public string? Email { get; init; }
    public long MobileNumber { get; init; }
    public Gender Gender { get; init; }
    public string? Address { get; init; }
}

public class CreateStudentCommandHandler : IRequestHandler<CreateStudentCommand, int>
{
    private readonly IApplicationDbContext _context;

    public CreateStudentCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<int> Handle(CreateStudentCommand request, CancellationToken cancellationToken)
    {
        var entity = new Students
        {
            MachinesId = request.MachinesId,
            BatchTimingsId = request.BatchTimingsId,
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            MobileNumber = request.MobileNumber,
            Gender = request.Gender,
            Address = request.Address
        };

        _context.Students.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
