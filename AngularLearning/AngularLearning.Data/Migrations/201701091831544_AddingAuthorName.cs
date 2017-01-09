namespace AngularLearning.Data.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddingAuthorName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Books", "Author", c => c.String(false, 100));
            AlterColumn("dbo.Books", "Name", c => c.String(false, 100));
            AlterColumn("dbo.BookCategories", "Name", c => c.String(false, 100));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.BookCategories", "Name", c => c.String());
            AlterColumn("dbo.Books", "Name", c => c.String());
            DropColumn("dbo.Books", "Author");
        }
    }
}
