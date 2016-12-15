using System.Data.Entity;

namespace AngularLearning.Data
{
    public class AngularModelContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<BookCategory> Categories { get; set; }
    }
}
