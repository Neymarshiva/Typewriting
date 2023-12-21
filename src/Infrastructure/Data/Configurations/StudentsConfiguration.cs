using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Infrastructure.Data.Configurations;
public class StudentsConfiguration : IEntityTypeConfiguration<Students>
{
    public void Configure(EntityTypeBuilder<Students> builder)
    {

        builder.Property(t => t.FirstName)
            .HasMaxLength(50);
        builder.Property(t => t.LastName)
           .HasMaxLength(50);
        builder.Property(t => t.Email)
           .HasMaxLength(50);
        builder.Property(t => t.Gender)
           .HasMaxLength(16);
        builder.Property(t => t.Address)
           .HasMaxLength(512);

    }
}
