/****** Object:  StoredProcedure [dbo].[SPS_UpcomingAppoinment]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--use doctor;

CREATE PROCEDURE [dbo].[SPS_UpcomingAppoinment]
@DoctorUserName varchar(255)
as
begin
DECLARE @Today DATE = CONVERT(DATE, GETDATE());
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
where 
	D.UserName = @DoctorUserName 
        AND (
            T.Date > @Today 
            OR 
			(T.Date = @Today AND CONVERT(TIME, T.StartTime) > CONVERT(TIME, SYSDATETIME()))
        );
end
GO
