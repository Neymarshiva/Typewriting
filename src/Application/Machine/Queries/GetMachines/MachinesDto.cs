using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.TodoItems.Queries.GetTodoItemsWithPagination;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Application.Machine.Queries.GetMachines;
public class MachinesDto
{
    public int Id { get; init; }
    public string MachineNumber { get; init; } = string.Empty;
    public int LanguageId { get; init; }
    public string LanuagesType { get; set; } = string.Empty;

    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Machines, MachinesDto>()
                .ForMember(d => d.LanuagesType, opt => opt.MapFrom(src => src.Languages.LanuagesType))
                .ForMember(d => d.LanguageId, opt => opt.MapFrom(src => src.LanguagesId));
        }
    }
}
