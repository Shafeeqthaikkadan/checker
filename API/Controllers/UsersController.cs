using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController:ControllerBase
    {
        private readonly StoreContext _context;
        public UsersController(StoreContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public ActionResult<List<User>> GetUser()
        {

            return Ok();
        }
        
    }
}