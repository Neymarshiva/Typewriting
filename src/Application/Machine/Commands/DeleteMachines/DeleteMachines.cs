using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoLists.Commands.DeleteTodoList;

namespace TypeWriting.Application.Machine.Commands.DeleteMachines;
public record DeleteMachinesCommand(int Id) : IRequest;


public class DeleteMachinesCommandHandler : IRequestHandler<DeleteMachinesCommand>
{
    private readonly IApplicationDbContext _context;

    public DeleteMachinesCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(DeleteMachinesCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Machines
            .Where(l => l.Id == request.Id)
            .SingleOrDefaultAsync(cancellationToken);

        Guard.Against.NotFound(request.Id, entity);

        _context.Machines.Remove(entity);

        await _context.SaveChangesAsync(cancellationToken);
    }
}
