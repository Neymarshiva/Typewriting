using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeWriting.Domain.Entities;
public class BatchTimings : BaseAuditableEntity
{
    public string Timings { get; set; } = string.Empty;
    public IList<Students> Students { get; private set; } = new List<Students>();
}
