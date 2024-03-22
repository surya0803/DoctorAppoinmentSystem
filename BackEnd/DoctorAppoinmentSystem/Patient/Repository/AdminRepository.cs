using Patient.Model;
using System.Data.SqlClient;
using System.Numerics;

namespace Patient.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly string connection;
        public AdminRepository(IConfiguration configuration)
        {
            connection = configuration.GetConnectionString("DBConnection");
        }

        public List<AdminModel> GetAdminLogin(string username, string password)
        {
            List<AdminModel> list = new List<AdminModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_AdminLogin", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", username);
                        cmd.Parameters.AddWithValue("@Password", password);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                AdminModel adminModel = new AdminModel();
                                
                                adminModel.Id = Convert.ToInt64(reader["Id"]);
                                adminModel.UserName = Convert.ToString(reader["UserName"]);
                                list.Add(adminModel);
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

        public List<AdminModel> GetUserName(string UserName)
        {
            List<AdminModel> list = new List<AdminModel>();

            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();

                    using (SqlCommand cmd = new SqlCommand("SPS_CheckUserName", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", UserName);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                AdminModel adminModel = new AdminModel();
                                adminModel.UserName = Convert.ToString(reader["UserName"]);
                                list.Add(adminModel);
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


        public List<SelectAppoinmentModel> GetAppoinmentDetails()
        {
            List<SelectAppoinmentModel> list = new List<SelectAppoinmentModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_AppoinmentDetails", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SelectAppoinmentModel appoinment = new SelectAppoinmentModel();
                                appoinment.DoctorName = Convert.ToString(reader["DoctorName"]);
                                appoinment.PatientName = Convert.ToString(reader["PatientName"]);
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
                }catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally { 
                    conn.Close(); 
                }
            }
            return list;
        }

        public List<DoctorModel> GetDoctorDetails()
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
                            doctormodel.UserName = Convert.ToString(reader["UserName"]);
                            doctormodel.Password = Convert.ToString(reader["Password"]);
                            doctormodel.Name = Convert.ToString(reader["Name"]);
                            doctormodel.DOB = Convert.ToDateTime(reader["DOB"]);
                            doctormodel.Gender = Convert.ToInt32(reader["Gender"]);
                            doctormodel.PhoneNumber = Convert.ToString(reader["PhoneNumber"]);
                            doctormodel.Address = Convert.ToString(reader["Address"]);
                            doctormodel.Specialization = Convert.ToString(reader["Specialization"]);
                            doctormodel.Experience = (float)Convert.ToDouble(reader["Experience"]);
                            doctormodel.Image = Convert.ToString(reader["Image"]);
                            doctormodel.CreatedBy = Convert.ToString(reader["CreatedBy"]);
                            doctormodel.CreatedDateTime = Convert.ToDateTime(reader["CreatedDateTime"]);
                            doctormodel.UpdatedBy = Convert.ToString(reader["UpdatedBy"]);
                            doctormodel.UpdatedDateTime = Convert.ToDateTime(reader["UpdatedDateTime"]);
                            list.Add(doctormodel);
                        }
                        reader.Close();
                    }
                }
                catch (Exception ex) {
                    Console.WriteLine(ex.ToString());
                }
                finally
                {
                    conn.Close();
                }
            }
            return list;
        }

        public List<PatientModel> GetPatientDetails()
        {
            List<PatientModel> list = new List<PatientModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_PatientDetails", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                PatientModel patient = new PatientModel();
                                patient.UserName = Convert.ToString(reader["UserName"]);
                                patient.Password = Convert.ToString(reader["Password"]);
                                patient.Name = Convert.ToString(reader["Name"]);
                                patient.BloodGroup = Convert.ToInt32(reader["BloodGroup"]);
                                patient.Gender = Convert.ToInt32(reader["Gender"]);
                                patient.Height = Convert.ToSingle(reader["Height"]);
                                patient.Weight = Convert.ToSingle(reader["weight"]);
                                patient.DOB = Convert.ToDateTime(reader["DOB"]);
                                patient.PhoneNumber = Convert.ToString(reader["PhoneNumber"]);
                                patient.Address = Convert.ToString(reader["Address"]);
                                patient.Image = Convert.ToString(reader["Image"]);
                                patient.CreatedBy = Convert.ToString(reader["CreatedBy"]);
                                patient.CreatedDateTime = Convert.ToDateTime(reader["CreatedDateTime"]);
                                patient.UpdatedBy = Convert.ToString(reader["UpdatedBy"]);
                                patient.UpdatedDateTime = Convert.ToDateTime(reader["UpdatedDateTime"]);
                                list.Add(patient);
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

        public List<PatientModel> GetPatientDetailsByUserName(string UserName)
        {

            List<PatientModel> list = new List<PatientModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_PatientDetailsByUserName", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName",UserName);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                PatientModel patient = new PatientModel();
                                patient.UserName = Convert.ToString(reader["UserName"]);
                                patient.Password = Convert.ToString(reader["Password"]);
                                patient.Name = Convert.ToString(reader["Name"]);
                                patient.Height = Convert.ToSingle(reader["Height"]);
                                patient.Weight = Convert.ToSingle(reader["weight"]);
                                patient.PhoneNumber = Convert.ToString(reader["PhoneNumber"]);
                                patient.Address = Convert.ToString(reader["Address"]);
                                patient.Image = Convert.ToString(reader["Image"]);
                                patient.UpdatedBy = Convert.ToString(reader["UpdatedBy"]);
                                list.Add(patient);
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

        public int PostNewDoctor(DoctorModel doctor)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPI_Doctor", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@HospitalId", doctor.HospitalId);
                        cmd.Parameters.AddWithValue("@UserName", doctor.UserName);
                        cmd.Parameters.AddWithValue("@Password", doctor.Password);
                        cmd.Parameters.AddWithValue("@Name", doctor.Name);
                        cmd.Parameters.AddWithValue("@DOB", doctor.DOB);
                        cmd.Parameters.AddWithValue("@Gender", doctor.Gender);
                        cmd.Parameters.AddWithValue("@PhoneNumber", doctor.PhoneNumber);
                        cmd.Parameters.AddWithValue("@Address", doctor.Address);
                        cmd.Parameters.AddWithValue("@Specialization", doctor.Specialization);
                        cmd.Parameters.AddWithValue("@Experience", doctor.Experience);
                        cmd.Parameters.AddWithValue("@Image", doctor.Image);
                        cmd.Parameters.AddWithValue("@CreatedBy", doctor.CreatedBy);
                        cmd.Parameters.AddWithValue("@UpdatedBy", doctor.UpdatedBy);
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

        public int PutPatientsDetails(PatientModel patientmodel)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPU_PatientDetails", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", patientmodel.UserName);
                        cmd.Parameters.AddWithValue("@Password", patientmodel.Password);
                        cmd.Parameters.AddWithValue("@Name", patientmodel.Name);
                        cmd.Parameters.AddWithValue("Height", patientmodel.Height);
                        cmd.Parameters.AddWithValue("Weight", patientmodel.Weight);
                        cmd.Parameters.AddWithValue("@PhoneNumber", patientmodel.PhoneNumber);
                        cmd.Parameters.AddWithValue("@Address", patientmodel.Address);
                        cmd.Parameters.AddWithValue("@Image", patientmodel.Image);
                        cmd.Parameters.AddWithValue("@UpdatedBy", patientmodel.UpdatedBy);
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

        public int PostNewHospital(HospitalModel hospital)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPI_Hospital", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Name", hospital.Name);
                        cmd.Parameters.AddWithValue("@State", hospital.State);
                        cmd.Parameters.AddWithValue("@District", hospital.District);
                        cmd.Parameters.AddWithValue("@Location", hospital.Location);
                        cmd.Parameters.AddWithValue("@Pincode", hospital.Pincode);
                        cmd.Parameters.AddWithValue("@Address", hospital.Address);
                        cmd.Parameters.AddWithValue("@PhoneNumber", hospital.PhoneNumber);
                        cmd.Parameters.AddWithValue("@Email", hospital.Email);
                        cmd.Parameters.AddWithValue("@Website", hospital.Website);
                        cmd.Parameters.AddWithValue("@AdministratorName", hospital.AdministratorName);
                        cmd.Parameters.AddWithValue("@AdministratorUserName", hospital.AdministratorUserName);
                        cmd.Parameters.AddWithValue("@AdministratorPassword", hospital.AdministratorPassword);
                        result = cmd.ExecuteNonQuery();
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
        public List<StateModel> GetState()
        {
            List<StateModel> list = new List<StateModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_State", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                StateModel state = new StateModel();
                                state.Id = Convert.ToInt32(reader["Id"]);
                                state.Name = Convert.ToString(reader["Name"]);
                                list.Add(state);
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
        public List<DistrictModel> GetDistrict()
        {
            List<DistrictModel> list = new List<DistrictModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_District", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                DistrictModel district = new DistrictModel();
                                district.Id = Convert.ToInt32(reader["Id"]);
                                district.StateId = Convert.ToInt32(reader["StateId"]);
                                district.Name = Convert.ToString(reader["Name"]);
                                list.Add(district);
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
    }
}
