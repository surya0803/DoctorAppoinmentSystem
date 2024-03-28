using Patient.Model;
using System.Data.SqlClient;
namespace Patient.Repository
{
    public class PatientRepository : IPatientRepository
    {
        private readonly string connection;

        public PatientRepository(IConfiguration configuration)
        {
            connection = configuration.GetConnectionString("DBConnection");
        }

            public List<DoctorModel> GetAllDoctorSpecialization()
            {
                List<DoctorModel> list = new List<DoctorModel>();
                using (SqlConnection conn = new SqlConnection(connection))
                {
                    try
                    {
                        conn.Open();
                        using (SqlCommand cmd = new SqlCommand("SPS_DoctorDetails", conn))
                        {
                            cmd.CommandType = System.Data.CommandType.StoredProcedure;
                            SqlDataReader reader = cmd.ExecuteReader();
                            while (reader.Read())
                            {
                                DoctorModel doctormodel = new DoctorModel();
                                doctormodel.Id = Convert.ToInt64(reader["Id"]);
                                doctormodel.HospitalId = Convert.ToInt64(reader["HospitalId"]);
                                doctormodel.Name = Convert.ToString(reader["Name"]);
                                doctormodel.Specialization = Convert.ToString(reader["Specialization"]);
                                list.Add(doctormodel);
                            }
                            reader.Close();
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.ToString());
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
                return list;
            }

        public List<SelectAppoinmentModel> GetAppoinmentStatus(string UserName)
        {

            List<SelectAppoinmentModel> list = new List<SelectAppoinmentModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_AppoinmentStatus", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@DoctorUserName", UserName);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SelectAppoinmentModel appoinment = new SelectAppoinmentModel();
                                appoinment.PatientName = Convert.ToString(reader["Name"]);
                                appoinment.DoctorName = Convert.ToString(reader["Name"]);
                                appoinment.Purpose = Convert.ToString(reader["Purpose"]);
                                appoinment.Description = Convert.ToString(reader["Description"]);
                                appoinment.StartTime = Convert.ToDateTime(reader["StartTime"]);
                                appoinment.EndTime = Convert.ToDateTime(reader["EndTime"]);
                                appoinment.Date = Convert.ToDateTime(reader["Date"]);
                                appoinment.Status = Convert.ToInt32(reader["Status"]);
                                list.Add(appoinment);
                            }
                            reader.Close();
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally
                {
                    conn.Close();
                }
            }
            return list;
        }

        public List<PatientModel> GetPatientLogin(string username, string password)
        {
            List<PatientModel> list = new List<PatientModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_PatientLogin", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", username);
                        cmd.Parameters.AddWithValue("@Password", password);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                PatientModel model = new PatientModel();
                                model.Id= Convert.ToInt64(reader["Id"]);
                                model.UserName = Convert.ToString(reader["UserName"]);
                                model.Image = Convert.ToString(reader["Image"]);
                                list.Add(model);
                            }
                            reader.Close();
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                finally
                {
                    conn.Close();
                }
            }
            return list;
        }

        public List<TimeSlotModel> GetTimeSlot(long PatientId, long DoctorId, DateTime Date)
        {

            List<TimeSlotModel> list = new List<TimeSlotModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_CheckAppoinmentSlots", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@PatientId", PatientId);
                        cmd.Parameters.AddWithValue("@DoctorId", DoctorId);
                        cmd.Parameters.AddWithValue("@Date", Date);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                TimeSlotModel Model=new TimeSlotModel();
                                Model.Id = Convert.ToInt64(reader["Id"]);
                                Model.StartTime = (DateTime)reader["StartTime"];
                                Model.EndTime = (DateTime)reader["EndTime"];
                                list.Add(Model);
                            }
                            reader.Close();
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally
                {
                    conn.Close();
                }
                return list;
            }
        }

        public int PostBookAppoinment(AppoinmentModel appoinmentModel)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPI_Appoinment", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@DoctorId", appoinmentModel.DoctorId);
                        cmd.Parameters.AddWithValue("@PatientId", appoinmentModel.PatientId);
                        cmd.Parameters.AddWithValue("@Purpose", appoinmentModel.Purpose);
                        cmd.Parameters.AddWithValue("@Description", appoinmentModel.Description);
                        cmd.Parameters.AddWithValue("@TimeSlotId",appoinmentModel.TimeSlotId);
                        cmd.Parameters.AddWithValue("@Status", appoinmentModel.Status);
                        result=cmd.ExecuteNonQuery();  
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally 
                { 
                    conn.Close();
                }
            }
            return result;
        }

        public int PostPatient(PatientModel patientModel)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPI_Patient", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", patientModel.UserName);
                        cmd.Parameters.AddWithValue("@Password", patientModel.Password);
                        cmd.Parameters.AddWithValue("@Name", patientModel.Name);
                        cmd.Parameters.AddWithValue("@Gender", patientModel.Gender);
                        cmd.Parameters.AddWithValue("@BloodGroup", patientModel.BloodGroup);
                        cmd.Parameters.AddWithValue("@Height", patientModel.Height);
                        cmd.Parameters.AddWithValue("@Weight", patientModel.Weight);
                        cmd.Parameters.AddWithValue("@DOB", patientModel.DOB);
                        cmd.Parameters.AddWithValue("@PhoneNumber", patientModel.PhoneNumber);
                        cmd.Parameters.AddWithValue("@Address", patientModel.Address);
                        cmd.Parameters.AddWithValue("@Image", patientModel.Image);
                        cmd.Parameters.AddWithValue("@CreatedBy", patientModel.CreatedBy);
                        cmd.Parameters.AddWithValue("@UpdatedBy", patientModel.UpdatedBy);
                        result=cmd.ExecuteNonQuery();
                    }
                }catch(Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally
                {
                    conn.Close();
                }
            }
            return result;
        }
    }
}
