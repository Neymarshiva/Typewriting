using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;
using TypeWriting.Domain.Entities;
using TypeWriting.Domain.Enums;

namespace TypeWriting.Application.Student.Queries.GetStudentWithPagination;
public class StudentsBriefDto
{
    public int Id { get; init; }
    public int MachinesId { get; init; }
    public string? MachinesNumber { get; init; }
    public int BatchTimingsId { get; init; }
    public string? Timings { get; init; }
    public string? FirstName { get; init; }
    public string? LastName { get; init; }
    public string? Email { get; init; }
    public long MobileNumber { get; init; }
    public Gender Gender { get; init; }
    public string? Address { get; init; }

    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Students, StudentsBriefDto>()
                .ForMember(d => d.MachinesNumber, opt => opt.MapFrom(src => src.Machines.MachineNumber))
                .ForMember(d => d.Timings, opt => opt.MapFrom(src => src.BatchTimings.Timings));
        }
    }
}
