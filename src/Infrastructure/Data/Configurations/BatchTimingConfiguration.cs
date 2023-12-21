using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Infrastructure.Data.Configurations;
public class BatchTimingConfiguration : IEntityTypeConfiguration<BatchTimings>
{
    public void Configure(EntityTypeBuilder<BatchTimings> builder)
    {
        builder.Property(t => t.Timings)
            .HasMaxLength(50)
            .IsRequired(); 
    }
}
