using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoLists.Commands.UpdateTodoList;

namespace TypeWriting.Application.Machine.Commands.UpdateMachines;
public record UpdateMachinesCommand : IRequest
{
    public int Id { get; init; }
    public string MachineNumber { get; init; } = string.Empty;
    public int LanguageId { get; set; }
}

public class UpdateMachinesCommandHandler : IRequestHandler<UpdateMachinesCommand>
{
    private readonly IApplicationDbContext _context;

    public UpdateMachinesCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task Handle(UpdateMachinesCommand request, CancellationToken cancellationToken)
    {
        var entity = await _context.Machines
            .FindAsync(new object[] { request.Id }, cancellationToken);

        Guard.Against.NotFound(request.Id, entity);

        entity.MachineNumber = request.MachineNumber;
        entity.LanguagesId = request.LanguageId;

        await _context.SaveChangesAsync(cancellationToken);

    }
}
