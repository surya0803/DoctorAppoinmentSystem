USE [doctor]
GO
/****** Object:  StoredProcedure [Doctor].[SPS_TodayAppoinment]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [Doctor].[SPS_TodayAppoinment]
@DoctorUserName varchar(255)
as
begin
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
where D.UserName = @DoctorUserName AND T.Date= CONVERT(DATE, SYSDATETIME());
end
GO
