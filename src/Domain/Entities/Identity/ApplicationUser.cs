using Microsoft.AspNetCore.Identity;

namespace TypeWriting.Domain.Entities;

public class ApplicationUser : IdentityUser
{
    public string? CompanyName { get; set; }
    public string? State { get; set; }
    public string? CountryCulture { get; set; }
    public IList<Machines> Machines { get; private set; } = new List<Machines>();
    public IList<Students> Students { get; private set; } = new List<Students>();
}
