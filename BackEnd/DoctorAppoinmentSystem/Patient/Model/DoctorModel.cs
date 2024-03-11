namespace Patient.Model
{
    public class DoctorModel
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public int Gender { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Specialization { get; set; }
        public float Experience { get; set; }
        public string Image { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime UpdatedDateTime { get; set; }
     }
}
