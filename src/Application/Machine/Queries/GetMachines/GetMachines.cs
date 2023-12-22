using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Common.Mappings;
using TypeWriting.Application.Common.Models;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;
namespace TypeWriting.Application.Machine.Queries.GetMachines;
public record GetMachinesQuery : IRequest<List<MachinesDto>>;


public class GetMachinesQueryHandler : IRequestHandler<GetMachinesQuery, List<MachinesDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public GetMachinesQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<List<MachinesDto>> Handle(GetMachinesQuery request, CancellationToken cancellationToken)
    {
        return await _context.Machines 
           .ProjectTo<MachinesDto>(_mapper.ConfigurationProvider).ToListAsync(); 
    }
}

