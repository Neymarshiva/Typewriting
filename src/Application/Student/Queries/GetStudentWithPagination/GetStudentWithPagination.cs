using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Common.Mappings;
using TypeWriting.Application.Common.Models;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;

namespace TypeWriting.Application.Student.Queries.GetStudentWithPagination;
public record GetStudentWithPaginationQuery : IRequest<PaginatedList<StudentsBriefDto>>
{ 
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
}


public class GetStudentWithPaginationQueryHandler : IRequestHandler<GetStudentWithPaginationQuery, PaginatedList<StudentsBriefDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public GetStudentWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<PaginatedList<StudentsBriefDto>> Handle(GetStudentWithPaginationQuery request, CancellationToken cancellationToken)
    {
        return await _context.Students
            .OrderBy(x => x.FirstName)
            .ThenBy(x => x.LastName)
            .ProjectTo<StudentsBriefDto>(_mapper.ConfigurationProvider)
            .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}
