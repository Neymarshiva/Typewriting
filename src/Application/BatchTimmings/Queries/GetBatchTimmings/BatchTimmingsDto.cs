using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TypeWriting.Application.Machine.Queries.GetMachines;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Application.BatchTimmings.Queries.GetBatchTimmings;
public class BatchTimmingsDto
{
    public int Id { get; set; }
    public string Timings { get; set; } = string.Empty;

    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<BatchTimings, BatchTimmingsDto>();
        }
    }
}
