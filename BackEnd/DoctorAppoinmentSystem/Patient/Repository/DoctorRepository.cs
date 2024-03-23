using Patient.Model;
using System.Data.SqlClient;
namespace Patient.Repository
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly string connection;
        public DoctorRepository(IConfiguration configuration)
        {
            connection = configuration.GetConnectionString("DBConnection");
        }
        public List<DoctorModel> GetDoctorLogin(string username, string password)
        {
            List<DoctorModel> list = new List<DoctorModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_DoctorLogin", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", username);
                        cmd.Parameters.AddWithValue("@Password", password);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                DoctorModel model = new DoctorModel();
                                model.Id = Convert.ToInt64(reader["Id"]);
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
        public int PutAvailability(SelectAppoinmentModel selectAppoinmentModel)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPU_DoctorAvailability", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", selectAppoinmentModel.DoctorName);
                        cmd.Parameters.AddWithValue("@Date", selectAppoinmentModel.Date);
                        cmd.Parameters.AddWithValue("@StartTime", selectAppoinmentModel.StartTime);
                        cmd.Parameters.AddWithValue("@EndTime", selectAppoinmentModel.EndTime);
                        result =cmd.ExecuteNonQuery();
                    }
                }catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally { 
                    conn.Close();
                }
            }
            return result;
        }

        public int PutDoctorDetails(DoctorModel doctorModel)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPU_DoctorDetails", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", doctorModel.UserName);
                        cmd.Parameters.AddWithValue("@Password", doctorModel.Password);
                        cmd.Parameters.AddWithValue("@Name", doctorModel.Name);
                        cmd.Parameters.AddWithValue("@PhoneNumber", doctorModel.PhoneNumber);
                        cmd.Parameters.AddWithValue("@Address", doctorModel.Address);
                        cmd.Parameters.AddWithValue("@Specialization", doctorModel.Specialization);
                        cmd.Parameters.AddWithValue("@Experience", doctorModel.Experience);
                        cmd.Parameters.AddWithValue("@Image", doctorModel.Image);
                        cmd.Parameters.AddWithValue("@UpdatedBy", doctorModel.UpdatedBy);
                        result=cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
                finally { 
                    conn.Close();
                }
            }
            return result;
        }

        public List<SelectAppoinmentModel> GetHistoryOfAppoinment(string UserName)
        {
            List<SelectAppoinmentModel> list = new List<SelectAppoinmentModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_HistoryOfAppoinment", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@DoctorUserName", UserName);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SelectAppoinmentModel appoinmentmodel = new SelectAppoinmentModel();
                                appoinmentmodel.DoctorName = Convert.ToString(reader["Name"]);
                                appoinmentmodel.PatientName = Convert.ToString(reader["Name"]);
                                appoinmentmodel.Purpose = Convert.ToString(reader["Purpose"]);
                                appoinmentmodel.Description = Convert.ToString(reader["Description"]);
                                appoinmentmodel.StartTime = Convert.ToDateTime(reader["StartTime"]);
                                appoinmentmodel.EndTime = Convert.ToDateTime(reader["EndTime"]);
                                appoinmentmodel.Date = Convert.ToDateTime(reader["Date"]);
                                appoinmentmodel.Status = Convert.ToInt32(reader["Status"]);
                                list.Add(appoinmentmodel);
                            }
                            reader.Close();
                        }
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
            return list;
        }

        public List<SelectAppoinmentModel> GetTodayAppoinment(string UserName)
        {
            List<SelectAppoinmentModel> list = new List<SelectAppoinmentModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_TodayAppoinment", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@DoctorUserName", UserName);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SelectAppoinmentModel appoinmentmodel = new SelectAppoinmentModel();
                                appoinmentmodel.DoctorName = Convert.ToString(reader["Name"]);
                                appoinmentmodel.PatientName = Convert.ToString(reader["Name"]);
                                appoinmentmodel.Purpose = Convert.ToString(reader["Purpose"]);
                                appoinmentmodel.Description = Convert.ToString(reader["Description"]);
                                appoinmentmodel.StartTime = Convert.ToDateTime(reader["StartTime"]);
                                appoinmentmodel.EndTime = Convert.ToDateTime(reader["EndTime"]);
                                appoinmentmodel.Date = Convert.ToDateTime(reader["Date"]);
                                appoinmentmodel.Status = Convert.ToInt32(reader["Status"]);
                                list.Add(appoinmentmodel);
                            }
                            reader.Close();
                        }
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
            return list;
        }

        public List<SelectAppoinmentModel> GetUpcomingAppoinment(string UserName)
        {
            List<SelectAppoinmentModel> list = new List<SelectAppoinmentModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_UpcomingAppoinment", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@DoctorUserName", UserName);
                        using (SqlDataReader reader = cmd.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                SelectAppoinmentModel appoinmentmodel = new SelectAppoinmentModel();
                                appoinmentmodel.DoctorName = Convert.ToString(reader["Name"]);
                                appoinmentmodel.PatientName = Convert.ToString(reader["Name"]);
                                appoinmentmodel.Purpose = Convert.ToString(reader["Purpose"]);
                                appoinmentmodel.Description = Convert.ToString(reader["Description"]);
                                appoinmentmodel.StartTime = Convert.ToDateTime(reader["StartTime"]);
                                appoinmentmodel.EndTime = Convert.ToDateTime(reader["EndTime"]);
                                appoinmentmodel.Date = Convert.ToDateTime(reader["Date"]);
                                appoinmentmodel.Status =Convert.ToInt32(reader["Status"]);
                                list.Add(appoinmentmodel);
                            }
                            reader.Close();
                        }
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
            return list;
        }

        public int PutAppoinmentStatus(int Id, int Status)
        {
            int result = 0;
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPU_AppoinmentStatus",conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@Id", Id);
                        cmd.Parameters.AddWithValue("@Status", Status);
                        result=cmd.ExecuteNonQuery();
                    }
                } catch(Exception ex)
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
                            doctormodel.UserName = Convert.ToString(reader["UserName"]);
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
                                appoinment.Id = Convert.ToInt64(reader["Id"]);
                                appoinment.PatientName = Convert.ToString(reader["Name"]);
                                appoinment.DoctorName = Convert.ToString(reader["Name"]);
                                appoinment.Purpose = Convert.ToString(reader["Purpose"]);
                                appoinment.Description = Convert.ToString(reader["Description"]);
                                appoinment.Date = Convert.ToDateTime(reader["Date"]);
                                appoinment.StartTime = Convert.ToDateTime(reader["StartTime"]);
                                appoinment.EndTime = Convert.ToDateTime(reader["EndTime"]);
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

        public List<DoctorModel> GetDoctorDetailsByUserName(string UserName)
        {
            List<DoctorModel> list = new List<DoctorModel>();
            using (SqlConnection conn = new SqlConnection(connection))
            {
                try
                {
                    conn.Open();
                    using (SqlCommand cmd = new SqlCommand("SPS_DoctorDetailsByUserName", conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@UserName", UserName);
                        SqlDataReader reader = cmd.ExecuteReader();
                        while (reader.Read())
                        {
                            DoctorModel doctormodel = new DoctorModel();
                            doctormodel.HospitalId = Convert.ToInt32(reader["HospitalId"]);
                            doctormodel.UserName = Convert.ToString(reader["UserName"]);
                            doctormodel.Password = Convert.ToString(reader["Password"]);
                            doctormodel.Name = Convert.ToString(reader["Name"]);
                            doctormodel.PhoneNumber = Convert.ToString(reader["PhoneNumber"]);
                            doctormodel.Address = Convert.ToString(reader["Address"]);
                            doctormodel.Image = Convert.ToString(reader["Image"]);
                            doctormodel.Specialization = Convert.ToString(reader["Specialization"]);
                            doctormodel.Experience = (float)Convert.ToDouble(reader["Experience"]);
                            doctormodel.UpdatedBy = Convert.ToString(reader["UpdatedBy"]);
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
    }
}
