using Patient.Model;

namespace Patient.Repository
{
    public interface IAdminRepository
    {

        List<AdminModel> GetLogin(string UserName, string Password);
        List<AdminModel> GetAdminLogin(string UserName, string Password);
        int PostNewDoctor(DoctorModel doctorModel);
        int PostNewHospital(HospitalModel hospitalModel);
        int PutHospital(HospitalModel hospitalModel);
        List<StateModel> GetState();
        List<DistrictModel> GetDistrict(long stateId);
        List<PatientModel> GetPatientDetails();
        List<DoctorModel> GetDoctorDetails();
        int PutPatientsDetails(PatientModel patientModel);
        List<PatientModel> GetPatientDetailsByUserName(String UserName);
        List<SelectAppoinmentModel> GetAppoinmentDetails();
        List<AdminModel> GetUserName(String UsernName);
        List<HospitalModel> GetHospitalDetails(string username);
    }
}
