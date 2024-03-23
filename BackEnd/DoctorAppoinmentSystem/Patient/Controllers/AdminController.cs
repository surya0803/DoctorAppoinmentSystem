using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Patient.Model;
using Patient.Repository;
using static System.Net.Mime.MediaTypeNames;

namespace Patient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        public readonly IAdminRepository _IAdminRespository;
        public AdminController(IAdminRepository iAdminRespository)
        {
            _IAdminRespository = iAdminRespository;
        }

        [HttpPost("AdminLogin")]
        public IActionResult GetAdminLogin(string UserName, string Password)
        {
            var test = _IAdminRespository.GetAdminLogin(UserName, Password);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPost("Login")]
        public IActionResult GetLogin(string UserName, string Password)
        {
            var test = _IAdminRespository.GetLogin(UserName, Password);
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetAllPatientDetails")]
        public IActionResult GetAllPatient()
        {
            var test = _IAdminRespository.GetPatientDetails();
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetAllDoctorDetails")]
        public IActionResult GetAllDoctor()
        {
            var test = _IAdminRespository.GetDoctorDetails();
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetAllAppoinmentDetails")]
        public IActionResult GetAllAppoinment()
        {
            var test = _IAdminRespository.GetAppoinmentDetails();
            if (test.Any()) return Ok(test);
            return BadRequest("Unsuccessfull");
        }

        [HttpPut("UpdatePatientDetails")]
        public IActionResult PutPatient(PatientModel patientModel)
        {
            int test=_IAdminRespository.PutPatientsDetails(patientModel);
            if (test!=0) return Ok(test);
            return BadRequest("Unsuccessfull");
        }


        [HttpPost("AddNewDoctor")]
        public IActionResult PostDoctor(DoctorModel doctorModel)
        {
            int result=_IAdminRespository.PostNewDoctor(doctorModel);
            if (result!=0) return Ok(result);
            return BadRequest("Unsuccessfull");
        }

        [HttpPost("AddNewHospital")]
        public IActionResult PostHospital(HospitalModel hospitalModel)
        {
            int result = _IAdminRespository.PostNewHospital(hospitalModel);
            if (result != 0) return Ok(result);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetPatientByUserName")]
        public IActionResult GetPatientByUserName(String UserName) { 
            var result=_IAdminRespository.GetPatientDetailsByUserName(UserName);
            if (result.Any()) return Ok(result);
            return BadRequest("Unsuccessfull");
        }

        [HttpGet("GetUserName")]
        public IActionResult GetUserName(String UserName)
        {
            var result=_IAdminRespository.GetUserName(UserName);
            if (result.Any()) return Ok(result);
            return BadRequest("UnSuccessfull");
        }

        [HttpGet("GetState")]
        public IActionResult GetState()
        {
            var result = _IAdminRespository.GetState();
            if (result.Any()) return Ok(result);
            return BadRequest("UnSuccessfull");
        }
        [HttpGet("GetDistrict")]
        public IActionResult GetDistrict(long StateId)
        {
            var result = _IAdminRespository.GetDistrict(StateId);
            if (result.Any()) return Ok(result);
            return BadRequest("UnSuccessfull");
        }
    }
}
