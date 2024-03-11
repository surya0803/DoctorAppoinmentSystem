using Patient.Model;

namespace Patient.Repository
{
    public interface IAdminRepository
    {
        List<AdminModel> GetAdminLogin(string UserName,string Password);

        int PostNewDoctor(DoctorModel doctorModel);

        List<PatientModel> GetPatientDetails();
        List<DoctorModel> GetDoctorDetails();

        int PutPatientsDetails(PatientModel patientModel);

        List<PatientModel> GetPatientDetailsByUserName(String UserName);

        List<SelectAppoinmentModel> GetAppoinmentDetails();

        List<AdminModel> GetUserName(String UsernName);
    }
}
