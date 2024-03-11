using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Patient.Model;
using Patient.Repository;
using static System.Net.Mime.MediaTypeNames;

namespace Patient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientRepository patientRepository;
        private readonly IAdminRepository adminRepository;
        public PatientController(IPatientRepository patientRepository, IAdminRepository adminRepository)
        {
            this.patientRepository = patientRepository;
            this.adminRepository = adminRepository;
        }

        [HttpPost("PatientLogin")]
        public IActionResult GetAdminLogin(String UserName, String Password)
        {
            var test = patientRepository.GetPatientLogin(UserName, Password);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");

        }

        [HttpPost("RegisterPatient")]
        public IActionResult PostPatient(PatientModel patientModel)
        {
            int test=patientRepository.PostPatient(patientModel);
            if (test!=0) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPut("UpdatePatientDetails")]
        public IActionResult PutPatient(PatientModel patientModel)
        {
            int test = adminRepository.PutPatientsDetails(patientModel);
            if (test!=0) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPost("BookAppoinment")]
        public IActionResult PostAppoiment(AppoinmentModel appoinmentModel)
        {
            int test=patientRepository.PostBookAppoinment(appoinmentModel);
            if (test!=0) return Ok(test);
            return BadRequest("Unsuccessfull"); ;
        }

        [HttpGet("GetAppoinmentStatus")]
        public IActionResult GetAllAppoinment(string UserName)
        {
            var test = patientRepository.GetAppoinmentStatus(UserName);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetAllDoctorSpecialization")]
        public IActionResult GetAllDoctor()
        {
            var test = patientRepository.GetAllDoctorSpecialization();
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetTimeSlot")]
        public IActionResult GetTimeSlot(long PatientId,long DoctorId,DateTime Date)
        {
            var test = patientRepository.GetTimeSlot(PatientId,DoctorId,Date);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }
    }
}
