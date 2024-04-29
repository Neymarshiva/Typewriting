using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TypeWriting.Application.Identity.Queries.GetCurrentUser;
public class CurrentUserDto
{   
    public string? UserName { get; init; }
    public string? Email { get; init; } 
    public string? PhoneNumber { get; init; }
    public string? CompanyName { get; set; }
    public string? CountryCulture { get; set; }
    public string? State { get; set; }
}
