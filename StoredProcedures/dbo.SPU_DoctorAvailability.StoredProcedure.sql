/****** Object:  StoredProcedure [dbo].[SPU_DoctorAvailability]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[SPU_DoctorAvailability]
@UserName varchar(255),
@Date DATE,
@StartTime TIME,
@EndTime TIME
AS
BEGIN
DECLARE @CurrentTime TIME = @StartTime;
DECLARE @DoctorId bigint;
SET @DoctorId = (SELECT Id FROM doctor WHERE UserName = @UserName);

    WHILE @CurrentTime < @EndTime
    BEGIN
        INSERT INTO timeslot 
		(DoctorId, Date, StartTime, EndTime, Availability)
        VALUES(
		@DoctorId, 
		@Date, 
		@CurrentTime, 
		DATEADD(HOUR, 1, @CurrentTime), 
		1);
        SET @CurrentTime = DATEADD(HOUR, 1, @CurrentTime);
    END;
END
GO
