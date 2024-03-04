using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeWriting.Domain.Entities;
public class Machines : BaseAuditableEntity
{
    public string MachineNumber { get; set; } = string.Empty;
    public int LanguagesId { get; set; }
    public string? UserId { get; set; }
    public Languages Languages { get; set; } = null!;
    public ApplicationUser User { get; set; } = null!;
    public IList<Students> Students { get; private set; } = new List<Students>();
}
