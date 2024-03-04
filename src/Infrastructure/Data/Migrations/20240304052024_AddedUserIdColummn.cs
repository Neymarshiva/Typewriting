using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TypeWriting.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedUserIdColummn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Machines",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Machines_UserId",
                table: "Machines",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Machines_AspNetUsers_UserId",
                table: "Machines",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Machines_AspNetUsers_UserId",
                table: "Machines");

            migrationBuilder.DropIndex(
                name: "IX_Machines_UserId",
                table: "Machines");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Machines");
        }
    }
}
