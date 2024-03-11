using Patient.Model;

namespace Patient.Repository
{
    public interface IPatientRepository
    {
        List<PatientModel> GetPatientLogin(string UserName, string Password);
        int PostPatient(PatientModel patientModel);
        int PostBookAppoinment(AppoinmentModel appoinmentModel);
        List<DoctorModel> GetAllDoctorSpecialization();
        List<SelectAppoinmentModel> GetAppoinmentStatus(string UserName);
        List<TimeSlotModel> GetTimeSlot(long PatientId, long DoctorId,DateTime Date);
    }
}
