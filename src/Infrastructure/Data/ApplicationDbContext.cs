using System.Reflection;
using TypeWriting.Application.Common.Interfaces;
using TypeWriting.Domain.Entities;
using TypeWriting.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace TypeWriting.Infrastructure.Data;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>, IApplicationDbContext
{
    private readonly IUser _user;

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IUser user) : base(options) {
        _user = user;
    }

    public DbSet<TodoList> TodoLists => Set<TodoList>();

    public DbSet<TodoItem> TodoItems => Set<TodoItem>();
    public DbSet<Machines> Machines => Set<Machines>();
    public DbSet<BatchTimings> BatchTimings => Set<BatchTimings>();
    public DbSet<Languages> Languages => Set<Languages>();
    public DbSet<Students> Students => Set<Students>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        builder.Entity<Machines>().HasQueryFilter(m => m.UserId == _user.Id);
        builder.Entity<Students>().HasQueryFilter(s => s.UserId == _user.Id);

        base.OnModelCreating(builder);
    }
}
