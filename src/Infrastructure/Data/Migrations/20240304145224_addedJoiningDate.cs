using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TypeWriting.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class addedJoiningDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "JoiningDate",
                table: "Students",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "JoiningDate",
                table: "Students");
        }
    }
}
