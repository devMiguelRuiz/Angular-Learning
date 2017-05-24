using System.Data.Entity;
using System.Threading.Tasks;

namespace AngularLearning.Data
{
    public interface IAngularModelContext
    {
        DbSet<Book> Books { get; }

        DbSet<BookCategory> Categories { get; }

        void MarkAsModified<T>(T item) where T : class;

        Task<int> SaveChangesAsync();
        void Dispose();
    }
}
