using Patient.Model;

namespace Patient.Repository
{
    public interface IDoctorRepository
    {
        List<DoctorModel> GetDoctorLogin(string UserName, string Password);
        int PutAppoinmentStatus(int Id, int Status);
        int PutDoctorDetails(DoctorModel doctorModel);
        int PutAvailability(SelectAppoinmentModel selectAppoinmentModel);
        List<SelectAppoinmentModel> GetTodayAppoinment(string UserName);
        List<SelectAppoinmentModel> GetUpcomingAppoinment(string UserName);
        List<SelectAppoinmentModel> GetHistoryOfAppoinment(string UserName);
        List<SelectAppoinmentModel> GetAppoinmentStatus(string UserName);
        List<DoctorModel> GetDoctorDetailsByUserName(string UserName);
    }
}
