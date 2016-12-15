using System.Xml.Serialization;
using Newtonsoft.Json;

namespace AngularLearning.Data
{
    public class Book
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CategoryId { get; set; }

        [JsonIgnore]
        public virtual BookCategory Category { get; set; }
    }
}