using System.Collections.Generic;

namespace AngularLearning.Models
{
    public class BookCategoryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<BookDto> Books { get; set; }
    }
}