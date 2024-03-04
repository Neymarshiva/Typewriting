using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TypeWriting.Domain.Entities;
using TypeWriting.Infrastructure.Identity;

namespace TypeWriting.Infrastructure.Data.Configurations;
public class MachinesConfiguration : IEntityTypeConfiguration<Machines>
{
    public void Configure(EntityTypeBuilder<Machines> builder)
    {

        builder.Property(t => t.MachineNumber)
            .HasMaxLength(50)
            .IsRequired(); 
    }
}
