namespace AngularLearning.Data.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddingCategories : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BookCategories",
                c => new
                    {
                        Id = c.Int(false, true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Books", "CategoryId", c => c.Int(false));
            CreateIndex("dbo.Books", "CategoryId");
            AddForeignKey("dbo.Books", "CategoryId", "dbo.BookCategories", "Id", true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Books", "CategoryId", "dbo.BookCategories");
            DropIndex("dbo.Books", new[] { "CategoryId" });
            DropColumn("dbo.Books", "CategoryId");
            DropTable("dbo.BookCategories");
        }
    }
}
