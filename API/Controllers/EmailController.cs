using API.Services;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace API.Controllers
{
    public class EmailController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly EmailService _emailService;
        public EmailController(StoreContext context, EmailService emailService)
        {
            _emailService = emailService;
            _context = context;
        }

        [HttpPost]
        public IActionResult SendEmail(EmailDto request)
        {
            _emailService.SendEmail(request);
            return Ok();
        }
    }
}