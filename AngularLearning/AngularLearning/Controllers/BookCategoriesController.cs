using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AngularLearning.Data;
using AngularLearning.Models;
using AutoMapper;

namespace AngularLearning.Controllers
{
    public class BookCategoriesController : ApiController
    {
        private readonly AngularModelContext _db = new AngularModelContext();

        // GET: api/BookCategories
        public List<BookCategoryDto> GetCategories()
        {
            //var mapped =  Mapper.Map<List<BookCategoryDto>>(_db.Categories);
            var mapped = _db.Categories.ProjectToList<BookCategoryDto>();

            return mapped;
        }

        // GET: api/BookCategories/5
        [ResponseType(typeof(BookCategoryDto))]
        public async Task<IHttpActionResult> GetBookCategory(int id)
        {
            var bookCategory = await _db.Categories.Where(x => x.Id == id).ProjectToFirstOrDefaultAsync<BookCategoryDto>();

            if (bookCategory == null)
            {
                return NotFound();
            }

            return Ok(bookCategory);
        }

        // PUT: api/BookCategories/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutBookCategory(int id, BookCategory bookCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookCategory.Id)
            {
                return BadRequest();
            }

            _db.Entry(bookCategory).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/BookCategories
        [ResponseType(typeof(BookCategory))]
        public async Task<IHttpActionResult> PostBookCategory(BookCategory bookCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Categories.Add(bookCategory);
            await _db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = bookCategory.Id }, bookCategory);
        }

        // DELETE: api/BookCategories/5
        [ResponseType(typeof(BookCategory))]
        public async Task<IHttpActionResult> DeleteBookCategory(int id)
        {
            BookCategory bookCategory = await _db.Categories.FindAsync(id);
            if (bookCategory == null)
            {
                return NotFound();
            }

            _db.Categories.Remove(bookCategory);
            await _db.SaveChangesAsync();

            return Ok(bookCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookCategoryExists(int id)
        {
            return _db.Categories.Count(e => e.Id == id) > 0;
        }
    }
}