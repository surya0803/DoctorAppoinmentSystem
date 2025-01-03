/****** Object:  StoredProcedure [dbo].[SPS_CheckAppoinmentSlots]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SPS_CheckAppoinmentSlots]
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
        WHERE CAST(T.StartTime AS TIME) > CAST(GETDATE() AS TIME)
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

exec SPS_CheckAppoinmentSlots 1,1,'2024-03-23'
GO
