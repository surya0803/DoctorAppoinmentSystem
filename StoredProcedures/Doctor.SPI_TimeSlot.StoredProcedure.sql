USE [doctor]
GO
/****** Object:  StoredProcedure [Doctor].[SPI_TimeSlot]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [Doctor].[SPI_TimeSlot]
    @DoctorId BIGINT,
    @Date DATE,
    @StartTime TIME,
    @EndTime TIME
AS
BEGIN
    DECLARE @CurrentTime TIME = @StartTime;

    WHILE @CurrentTime < @EndTime
    BEGIN
        INSERT INTO timeslot (DoctorId, Date, StartTime, EndTime, Availability)
        VALUES (@DoctorId, @Date, @CurrentTime, DATEADD(HOUR, 1, @CurrentTime), 1);

        SET @CurrentTime = DATEADD(HOUR, 1, @CurrentTime);
    END;
END;
GO
