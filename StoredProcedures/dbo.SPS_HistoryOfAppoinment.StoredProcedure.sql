/****** Object:  StoredProcedure [dbo].[SPS_HistoryOfAppoinment]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SPS_HistoryOfAppoinment]
    @DoctorUserName VARCHAR(255)
AS
BEGIN
    DECLARE @Today DATE = CONVERT(DATE, GETDATE());

    SELECT 
        A.Id,
        D.Name,
        P.Name,
        A.Purpose,
        A.Description,
        T.Date,
        T.StartTime,
        T.EndTime,
        A.Status
    FROM 
        appoinment AS A
    JOIN 
        Patient AS P ON P.Id = A.PatientId
    JOIN 
        Doctor AS D ON D.Id = A.DoctorId
    JOIN 
        timeslot AS T ON T.Id = A.TimeSlotId
    WHERE 
        D.UserName = @DoctorUserName 
        AND (
            T.Date < @Today 
            OR 
			(T.Date = @Today AND CONVERT(TIME, T.StartTime) < CONVERT(TIME, SYSDATETIME()))
        );
END;
GO
