namespace TypeWriting.Application.Common.Interfaces;

public interface IUser
{
    string? Id { get; }
    string? UserName { get; }
    string? Email { get; }
    string? PhoneNumber { get; }
}
