using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TypeWriting.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class RemovedDuplicateColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LanguageId",
                table: "Machines");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LanguageId",
                table: "Machines",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
