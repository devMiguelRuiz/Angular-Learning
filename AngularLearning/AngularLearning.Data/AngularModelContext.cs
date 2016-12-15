using System.Data.Entity;

namespace AngularLearning.Data
{
    public class AngularModelContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<BookCategory> Categories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //one-to-many
            // A book requires a Category wich has many Books and every book has a foreign key(CategoryId)
            modelBuilder.Entity<Book>()
                .HasRequired(b => b.Category)
                .WithMany(c => c.Books)
                .HasForeignKey(b => b.CategoryId);
        }
    }
}
