using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeWriting.Domain.Entities;
public class Students : BaseAuditableEntity
{
    public int MachinesId { get; set; }
    public int BatchTimingsId { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set;}
    public string? Email { get; set; }
    public long MobileNumber { get; set; }
    public Gender Gender { get; set; }
    public string? Address { get; set; }
    public DateTime? JoiningDate { get; set; }
    public string? UserId { get; set; }
    public Machines Machines { get; set; } = null!;
    public ApplicationUser User { get; set; } = null!;
    public BatchTimings BatchTimings { get; set; } = null!;
}
