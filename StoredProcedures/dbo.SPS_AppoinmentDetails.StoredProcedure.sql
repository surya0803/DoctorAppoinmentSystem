/****** Object:  StoredProcedure [dbo].[SPS_AppoinmentDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SPS_AppoinmentDetails]
AS
BEGIN
Select 
	A.Id,
	D.Name as DoctorName,
	P.Name as PatientName,
	A.Purpose,
	A.Description,
	T.Date,
	T.StartTime,
	T.EndTime,
	A.Status
from appoinment as A
	Join Patient as P ON P.Id=A.PatientId
	Join Doctor as D ON D.Id=A.DoctorId
	Join timeslot as T ON T.Id=A.TimeSlotId;
END
GO
