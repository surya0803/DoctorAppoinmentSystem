USE [doctor]
GO
/****** Object:  StoredProcedure [Doctor].[SPS_AppoinmentStatus]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [Doctor].[SPS_AppoinmentStatus]
@DoctorUserName varchar(255)
AS
BEGIN
Select 
	A.Id,
	D.Name,
	P.Name,
	A.Purpose,
	A.Description,
	T.Date,
	T.StartTime,
	T.EndTime,
	A.Status
from appoinment as A
	Join Patient as P ON P.Id=A.PatientId
	Join Doctor as D ON D.Id=A.DoctorId
	Join timeslot as T ON T.Id=A.TimeSlotId
where D.UserName = @DoctorUserName AND T.Date>=CONVERT(DATE, SYSDATETIME());;
END
GO
