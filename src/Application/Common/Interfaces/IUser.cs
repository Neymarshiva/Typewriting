namespace TypeWriting.Application.Common.Interfaces;

public interface IUser
{
    string? Id { get; }
    string? UserName { get; }
    string? Email { get; }
    string? PhoneNumber { get; }
    string? CountryCulture { get; }
    string? State { get; }
    string? CompanyName { get; }
}
