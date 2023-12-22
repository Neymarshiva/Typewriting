using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.TodoItems.Commands.CreateTodoItem;
using TypeWriting.Domain.Entities;
using TypeWriting.Domain.Events;

namespace TypeWriting.Application.Machine.Commands.CreateMachines;

public record CreateMachinesCommand : IRequest<int>
{
    public string MachineNumber { get; init; } = string.Empty;

    public int LanguageId { get; init; }
}


public class CreateMachinesCommandHandler : IRequestHandler<CreateMachinesCommand, int>
{
    private readonly IApplicationDbContext _context;

    public CreateMachinesCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<int> Handle(CreateMachinesCommand request, CancellationToken cancellationToken)
    {
        var entity = new Machines
        {
            MachineNumber = request.MachineNumber,
            LanguagesId = request.LanguageId,
            CreatedBy = "Adminstrator"
        };

        _context.Machines.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
