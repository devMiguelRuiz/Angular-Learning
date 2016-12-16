using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using AngularLearning.Data;

namespace AngularLearning.Controllers
{
    public class BookCategoriesController : ApiController
    {
        private AngularModelContext db = new AngularModelContext();

        // GET: api/BookCategories
        public IQueryable<BookCategory> GetCategories()
        {
            return db.Categories;
        }

        // GET: api/BookCategories/5
        [ResponseType(typeof(BookCategory))]
        public async Task<IHttpActionResult> GetBookCategory(int id)
        {
            BookCategory bookCategory = await db.Categories.FindAsync(id);
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

            db.Entry(bookCategory).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
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

            db.Categories.Add(bookCategory);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = bookCategory.Id }, bookCategory);
        }

        // DELETE: api/BookCategories/5
        [ResponseType(typeof(BookCategory))]
        public async Task<IHttpActionResult> DeleteBookCategory(int id)
        {
            BookCategory bookCategory = await db.Categories.FindAsync(id);
            if (bookCategory == null)
            {
                return NotFound();
            }

            db.Categories.Remove(bookCategory);
            await db.SaveChangesAsync();

            return Ok(bookCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookCategoryExists(int id)
        {
            return db.Categories.Count(e => e.Id == id) > 0;
        }
    }
}