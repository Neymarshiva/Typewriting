using Microsoft.AspNetCore.Identity;

namespace TypeWriting.Domain.Entities;

public class ApplicationUser : IdentityUser
{
    public IList<Machines> Machines { get; private set; } = new List<Machines>();
}
