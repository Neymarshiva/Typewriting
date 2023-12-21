using TypeWriting.Domain.Entities;

namespace TypeWriting.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<TodoList> TodoLists { get; }

    DbSet<TodoItem> TodoItems { get; }
    DbSet<Machines> Machines { get; }
    DbSet<BatchTimings> BatchTimings { get; }
    DbSet<Languages> Languages { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
