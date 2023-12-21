using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TypeWriting.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class CreatedStudentsTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MachinesId = table.Column<int>(type: "int", nullable: false),
                    BatchTimingsId = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    MobileNumber = table.Column<long>(type: "bigint", nullable: false),
                    Gender = table.Column<int>(type: "int", maxLength: 16, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(512)", maxLength: 512, nullable: true),
                    Created = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    CreatedBy = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    LastModifiedBy = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Students_BatchTimings_BatchTimingsId",
                        column: x => x.BatchTimingsId,
                        principalTable: "BatchTimings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Students_Machines_MachinesId",
                        column: x => x.MachinesId,
                        principalTable: "Machines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Students_BatchTimingsId",
                table: "Students",
                column: "BatchTimingsId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_MachinesId",
                table: "Students",
                column: "MachinesId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
