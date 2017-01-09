namespace AngularLearning.Data.Migrations
{
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularModelContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularModelContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Categories.AddOrUpdate(c=> c.Name, new BookCategory {Name = ".Net"}, new BookCategory {Name = "Javascript"});
            context.SaveChanges();

            var categoryId = context.Categories.First().Id;

            context.Books.AddOrUpdate(b => b.Name, 
                new Book {Name = ".Net Core", CategoryId = categoryId, Author = "Miguel Ruiz"},
                new Book {Name = "C# 6.0", CategoryId = categoryId, Author = "Miguel Ruiz"});
        }
    }
}
