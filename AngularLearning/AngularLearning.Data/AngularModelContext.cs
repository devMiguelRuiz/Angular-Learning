using System.Data.Entity;

namespace AngularLearning.Data
{
    public class AngularModelContext : DbContext, IAngularModelContext
    {
        public DbSet<Book> Books { get; set; }

        public DbSet<BookCategory> Categories { get; set; }

        public void MarkAsModified<T>(T item) where T : class
        {
            Entry(item).State = EntityState.Modified;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //one-to-many
            // A book requires a Category wich has many Books and every book has a foreign key(CategoryId)
            modelBuilder.Entity<Book>()
                .HasRequired(b => b.Category)
                .WithMany(c => c.Books)
                .HasForeignKey(b => b.CategoryId);

            // Name(Book): required and 100 as max lenght
            modelBuilder.Entity<Book>().Property(x => x.Name).IsRequired().HasMaxLength(100);

            // Author(Book): required and 100 as max lenght
            modelBuilder.Entity<Book>().Property(x => x.Author).IsRequired().HasMaxLength(100);

            // Name(BookCategory): required and 100 as max lenght
            modelBuilder.Entity<BookCategory>().Property(x => x.Name).IsRequired().HasMaxLength(100);
        }
    }
}
