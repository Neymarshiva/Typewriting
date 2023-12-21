using System.Runtime.InteropServices;
using TypeWriting.Domain.Constants;
using TypeWriting.Domain.Entities;
using TypeWriting.Infrastructure.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace TypeWriting.Infrastructure.Data;

public static class InitialiserExtensions
{
    public static async Task InitialiseDatabaseAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        var initialiser = scope.ServiceProvider.GetRequiredService<ApplicationDbContextInitialiser>();

        await initialiser.InitialiseAsync();

        await initialiser.SeedAsync();
    }
}

public class ApplicationDbContextInitialiser
{
    private readonly ILogger<ApplicationDbContextInitialiser> _logger;
    private readonly ApplicationDbContext _context;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public ApplicationDbContextInitialiser(ILogger<ApplicationDbContextInitialiser> logger, ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        _logger = logger;
        _context = context;
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task InitialiseAsync()
    {
        try
        {
            await _context.Database.MigrateAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while initialising the database.");
            throw;
        }
    }

    public async Task SeedAsync()
    {
        try
        {
            await TrySeedAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while seeding the database.");
            throw;
        }
    }

    public async Task TrySeedAsync()
    {
        // Default roles
        var administratorRole = new IdentityRole(Roles.Administrator);

        if (_roleManager.Roles.All(r => r.Name != administratorRole.Name))
        {
            await _roleManager.CreateAsync(administratorRole);
        }

        // Default users
        var administrator = new ApplicationUser { UserName = "administrator@localhost", Email = "administrator@localhost" };

        if (_userManager.Users.All(u => u.UserName != administrator.UserName))
        {
            await _userManager.CreateAsync(administrator, "Administrator1!");
            if (!string.IsNullOrWhiteSpace(administratorRole.Name))
            {
                await _userManager.AddToRolesAsync(administrator, new[] { administratorRole.Name });
            }
        }

        // Default data
        // Seed, if necessary
        if (!_context.TodoLists.Any())
        {
            _context.TodoLists.Add(new TodoList
            {
                Title = "Todo List",
                Items =
                {
                    new TodoItem { Title = "Make a todo list 📃" },
                    new TodoItem { Title = "Check off the first item ✅" },
                    new TodoItem { Title = "Realise you've already done two things on the list! 🤯"},
                    new TodoItem { Title = "Reward yourself with a nice, long nap 🏆" },
                }
            });

            await _context.SaveChangesAsync();
        }

        if (!_context.Languages.Any())
        {
            _context.Languages.Add(new Languages
            {
                 LanuagesType = "English",
            });

            _context.Languages.Add(new Languages
            {
                LanuagesType = "Tamil",
            });

            await _context.SaveChangesAsync();
        }

        if (!_context.BatchTimings.Any())
        {
            List<BatchTimings> BatchTimings = new List<BatchTimings>();

            BatchTimings.Add(new BatchTimings { Timings = "12-1" });
            BatchTimings.Add(new BatchTimings { Timings = "1-2" });
            BatchTimings.Add(new BatchTimings { Timings = "2-3" });
            BatchTimings.Add(new BatchTimings { Timings = "3-4" });
            BatchTimings.Add(new BatchTimings { Timings = "4-5" });
            BatchTimings.Add(new BatchTimings { Timings = "5-6" });
            BatchTimings.Add(new BatchTimings { Timings = "6-7" });
            BatchTimings.Add(new BatchTimings { Timings = "7-8" });
            BatchTimings.Add(new BatchTimings { Timings = "8-9" });
            BatchTimings.Add(new BatchTimings { Timings = "9-10" });
            BatchTimings.Add(new BatchTimings { Timings = "10-11" });
            BatchTimings.Add(new BatchTimings { Timings = "11-12" });
            BatchTimings.Add(new BatchTimings { Timings = "12-13" });
            BatchTimings.Add(new BatchTimings { Timings = "13-14" });
            BatchTimings.Add(new BatchTimings { Timings = "14-15" });
            BatchTimings.Add(new BatchTimings { Timings = "15-16" });
            BatchTimings.Add(new BatchTimings { Timings = "16-17" });
            BatchTimings.Add(new BatchTimings { Timings = "17-18" });
            BatchTimings.Add(new BatchTimings { Timings = "18-19" });
            BatchTimings.Add(new BatchTimings { Timings = "19-20" });
            BatchTimings.Add(new BatchTimings { Timings = "20-21" });
            BatchTimings.Add(new BatchTimings { Timings = "21-22" });
            BatchTimings.Add(new BatchTimings { Timings = "22-23" });
            BatchTimings.Add(new BatchTimings { Timings = "23-24" });

            _context.BatchTimings.AddRange(BatchTimings);

            await _context.SaveChangesAsync();
        }
    }
}
