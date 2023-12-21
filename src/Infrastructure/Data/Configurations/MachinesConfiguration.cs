﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TypeWriting.Domain.Entities;

namespace TypeWriting.Infrastructure.Data.Configurations;
public class MachinesConfiguration : IEntityTypeConfiguration<Machines>
{
    public void Configure(EntityTypeBuilder<Machines> builder)
    {
        builder.Property(t => t.Id)
            .HasColumnOrder(0);
        builder.Property(t => t.BatchTimingId)
            .HasColumnOrder(1);
        builder.Property(t => t.MachineNumber)
            .HasMaxLength(50)
            .IsRequired()
        .HasColumnOrder(2);
        builder.Property(t => t.Language)
            .HasMaxLength(50)
            .IsRequired()
            .HasColumnOrder(3);



    }
}
