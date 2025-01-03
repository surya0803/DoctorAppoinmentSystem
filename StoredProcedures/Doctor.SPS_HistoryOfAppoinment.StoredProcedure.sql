USE [doctor]
GO
/****** Object:  StoredProcedure [Doctor].[SPS_HistoryOfAppoinment]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [Doctor].[SPS_HistoryOfAppoinment]
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
