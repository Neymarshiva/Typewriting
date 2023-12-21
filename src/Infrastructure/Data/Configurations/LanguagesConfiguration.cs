using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Infrastructure.Data.Configurations;
public class LanguagesConfiguration : IEntityTypeConfiguration<Languages>
{
    public void Configure(EntityTypeBuilder<Languages> builder)
    {  
        builder.Property(t => t.LanuagesType)
            .HasMaxLength(50)
            .IsRequired();
    }
}
