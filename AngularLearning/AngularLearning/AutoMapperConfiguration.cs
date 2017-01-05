using AngularLearning.Data;
using AngularLearning.Models;
using AutoMapper;

namespace AngularLearning
{
    public static class AutoMapperConfiguration
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Book, BookDto>();
                cfg.CreateMap<BookCategory, BookCategoryDto>();
            });
        }
    }
}