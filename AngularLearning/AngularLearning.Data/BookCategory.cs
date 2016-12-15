using System.Collections.Generic;

namespace AngularLearning.Data
{
    public class BookCategory
    {
        public BookCategory()
        {
            this.Books = new List<Book>();
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Book> Books { get; set; }
    }
}
