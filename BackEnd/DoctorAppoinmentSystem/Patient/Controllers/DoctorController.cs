using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Patient.Model;
using Patient.Repository;
using static System.Net.Mime.MediaTypeNames;

namespace Patient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorRepository DoctorRepository;
        public DoctorController(IDoctorRepository _IDoctorRepository, IAdminRepository adminRepository)
        {
            DoctorRepository = _IDoctorRepository;
        }

        [HttpPost("DoctorLogin")]
        public IActionResult GetDoctorLogin(string UserName, string Password)
        {
            var test = DoctorRepository.GetDoctorLogin(UserName, Password);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPut("UpdateDoctorDetails")]
        public IActionResult actionResult(DoctorModel doctorModel)
        {
            int test = DoctorRepository.PutDoctorDetails(doctorModel);
            if (test!=0) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPost("UpdateDoctorAvailability")]
        public IActionResult actionResult(SelectAppoinmentModel selectAppoinmentModel)
        {
            int result = DoctorRepository.PutAvailability(selectAppoinmentModel);
            if (result!=0) return Ok(result);
            return BadRequest("Unsuccessfull");
        }


        [HttpGet("TodayAppoinment")]
        public IActionResult actionResult(string UserName)
        {
            var test = DoctorRepository.GetTodayAppoinment(UserName);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("UpComingAppoinment")]
        public IActionResult ActionResult(string UserName)
        {
            var test = DoctorRepository.GetUpcomingAppoinment(UserName);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("HistoryOfAppoinment")]
        public IActionResult Actionresult(string UserName)
        {
            var test = DoctorRepository.GetHistoryOfAppoinment(UserName);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetDoctorByUserName")]
        public IActionResult GetDoctorByUserName(string UserName)
        {
            var test = DoctorRepository.GetDoctorDetailsByUserName(UserName);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPut("PutAppoinmentStatus")]
        public IActionResult UpdateAppoinmentStatus(int Id,int status) {
            int test=DoctorRepository.PutAppoinmentStatus(Id, status);
            if (test!=0) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetAppoinmentStatus")]
        public IActionResult GetAllAppoinment(string UserName)
        {
            var test = DoctorRepository.GetAppoinmentStatus(UserName);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

    }
}
