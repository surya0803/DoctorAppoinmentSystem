USE [doctor]
GO
/****** Object:  StoredProcedure [Patient].[SPS_CheckAppoinmentSlots]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [Patient].[SPS_CheckAppoinmentSlots]
    @PatientId BIGINT,
    @DoctorId BIGINT,
    @Date DATE
AS
BEGIN
    DECLARE @CurrentDate DATE
    SET @CurrentDate = CAST(GETDATE() AS DATE)

    IF @Date = @CurrentDate
    BEGIN
        SELECT T.Id, T.StartTime, T.EndTime
        FROM timeslot T
        WHERE T.StartTime > GETDATE()  -- Assuming StartTime is a datetime column
            AND T.DoctorId = @DoctorId 
            AND T.Date = @Date
            AND T.Id NOT IN (SELECT TimeSlotId FROM appoinment)
            AND NOT EXISTS (
                SELECT 1
                FROM appoinment AS A
                JOIN timeslot AS AT ON A.TimeSlotId = AT.Id
                WHERE A.PatientId = @PatientId
                  AND AT.Date = @Date
                  AND T.StartTime < AT.EndTime
                  AND T.EndTime > AT.StartTime
            );
    END
    ELSE IF @Date > @CurrentDate
    BEGIN
        SELECT T.Id, T.StartTime, T.EndTime
        FROM timeslot T
        WHERE T.DoctorId = @DoctorId 
            AND T.Date = @Date
            AND T.Id NOT IN (SELECT TimeSlotId FROM appoinment)
            AND NOT EXISTS (
                SELECT 1
                FROM appoinment AS A
                JOIN timeslot AS AT ON A.TimeSlotId = AT.Id
                WHERE A.PatientId = @PatientId
                  AND AT.Date = @Date
                  AND T.StartTime < AT.EndTime
                  AND T.EndTime > AT.StartTime
            );
    END
END
GO
