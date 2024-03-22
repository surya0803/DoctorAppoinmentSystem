namespace Patient.Model
{
    public class HospitalModel
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long State { get; set; }
        public long District { get; set; }
        public string Location { get; set; }
        public string Pincode { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string AdministratorName { get; set; }
        public string AdministratorUserName { get; set; }
        public string AdministratorPassword { get; set; }
    }
}
