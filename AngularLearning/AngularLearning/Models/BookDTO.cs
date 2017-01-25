namespace AngularLearning.Models
{
    public class BookDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Author { get; set; }

        public int CategoryId { get; set; }

        // 
        public BookCategoryDto Category { get; set; }
    }
}