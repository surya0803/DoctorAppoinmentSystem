namespace Patient.Model
{

    public class AppoinmentModel
    {
        public long Id { get; set; }
        public long DoctorId{ get; set; }
        public long PatientId { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public int TimeSlotId { get; set; }
        public int Status { get; set; }
    }
}
