using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Application.Common.Mappings;
using TypeWriting.Application.Common.Models;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;
using TypeWriting.Domain.Entities;
using TypeWriting.Domain.Enums;

namespace TypeWriting.Application.Student.Queries.GetStudentWithPagination;
public record GetStudentWithPaginationQuery : IRequest<PaginatedList<StudentsBriefDto>>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
    public int? Gender { get; init; } = 0;
    public int? BatchTimingsId { get; init; }
    public int? MachinesId { get; init; }
    public string? SearchTerm { get; init; }
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
        IQueryable<Students> query = _context.Students;

        if (request.Gender > 0)
        {
            var gender = (Gender)request.Gender;
            query = query.Where(x => x.Gender == gender);
        }
        if (request.MachinesId > 0)
        {
            query = query.Where(x => x.MachinesId == request.MachinesId);
        }
        if (request.BatchTimingsId > 0)
        {
            query = query.Where(x => x.BatchTimingsId == request.BatchTimingsId);
        }
        if (!string.IsNullOrEmpty(request.SearchTerm))
        {
            query = query.Where(e =>
                EF.Functions.Like(e.FirstName, $"%{request.SearchTerm}%") ||
                EF.Functions.Like(e.LastName, $"%{request.SearchTerm}%") ||
                EF.Functions.Like(e.Email, $"%{request.SearchTerm}%") ||
                EF.Functions.Like(e.MobileNumber.ToString(), $"%{request.SearchTerm}%") ||
                EF.Functions.Like(e.Address, $"%{request.SearchTerm}%"));
        }


        return await query
            .Include(x => x.Machines)
            .Include(x => x.BatchTimings)
            .OrderBy(x => x.FirstName)
            .ThenBy(x => x.LastName)
            .AsNoTracking()
            .ProjectTo<StudentsBriefDto>(_mapper.ConfigurationProvider)
            .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}
