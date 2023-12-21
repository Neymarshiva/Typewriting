using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeWriting.Domain.Entities;
public class Machines : BaseAuditableEntity
{
    public string MachineNumber { get; set; } = string.Empty;
    public string Language { get; set; } = string.Empty;
}
