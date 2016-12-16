using System.Collections.Generic;
using Newtonsoft.Json;

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

        [JsonIgnore]
        public virtual ICollection<Book> Books { get; set; }
    }
}
