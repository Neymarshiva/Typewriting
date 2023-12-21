using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TypeWriting.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class LanguageTableCreated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Language",
                table: "Machines");

            migrationBuilder.AddColumn<int>(
                name: "LanguageId",
                table: "Machines",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LanguagesId",
                table: "Machines",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LanuagesType = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Languages", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Machines_LanguagesId",
                table: "Machines",
                column: "LanguagesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Machines_Languages_LanguagesId",
                table: "Machines",
                column: "LanguagesId",
                principalTable: "Languages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Machines_Languages_LanguagesId",
                table: "Machines");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropIndex(
                name: "IX_Machines_LanguagesId",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "LanguageId",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "LanguagesId",
                table: "Machines");

            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "Machines",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");
        }
    }
}
