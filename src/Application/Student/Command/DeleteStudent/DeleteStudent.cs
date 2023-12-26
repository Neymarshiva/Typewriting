using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoItems.Commands.DeleteTodoItem;
using TypeWriting.Domain.Events;

namespace TypeWriting.Application.Student.Command.DeleteStudent;


public record DeleteStudentCommand(int Id) : IRequest;

public class DeleteStudentCommandHandler : IRequestHandler<DeleteStudentCommand>
{
    private readonly IApplicationDbContext _context;

    public DeleteStudentCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(DeleteStudentCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Students
            .FindAsync(new object[] { request.Id }, cancellationToken);

        Guard.Against.NotFound(request.Id, entity);

        _context.Students.Remove(entity); 

        await _context.SaveChangesAsync(cancellationToken);
    }

}
