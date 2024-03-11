namespace Patient.Model
{
    public class SelectAppoinmentModel
    {
        public long Id { get; set; }
        public string DoctorName { get; set; }
        public string PatientName { get; set; }
        public string Purpose { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Status { get; set; }
    }
}
