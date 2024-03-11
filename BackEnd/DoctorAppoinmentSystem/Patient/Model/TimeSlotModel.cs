namespace Patient.Model
{
    public class TimeSlotModel
    {
        public long Id { get; set; }
        public int DoctorId { get; set; }   
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Availability {  get; set; }

    }
}
