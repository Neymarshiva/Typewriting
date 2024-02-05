using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Machine.Queries.GetMachines;

namespace TypeWriting.Application.BatchTimmings.Queries.GetBatchTimmings;


public record GetBatchTimmingsQuery : IRequest<List<BatchTimmingsDto>>;



public class GetBatchTimmingsQueryHandler : IRequestHandler<GetBatchTimmingsQuery, List<BatchTimmingsDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public GetBatchTimmingsQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<List<BatchTimmingsDto>> Handle(GetBatchTimmingsQuery request, CancellationToken cancellationToken)
    {
        return await _context.BatchTimings 
            .AsNoTracking()
            .ProjectTo<BatchTimmingsDto>(_mapper.ConfigurationProvider).ToListAsync(cancellationToken);
    }
}
