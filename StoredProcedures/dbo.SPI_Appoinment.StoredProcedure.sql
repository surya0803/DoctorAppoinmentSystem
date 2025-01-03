/****** Object:  StoredProcedure [dbo].[SPI_Appoinment]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SPI_Appoinment]
    @DoctorId BIGINT,
    @PatientId BIGINT,
    @Purpose VARCHAR(255),
    @Description VARCHAR(255),
    @TimeSlotId BIGINT,
    @Status INT
AS
    BEGIN
        INSERT INTO appoinment(DoctorId, PatientId, Purpose, Description, TimeSlotId, Status)
        VALUES (@DoctorId, @PatientId, @Purpose, @Description, @TimeSlotId, @Status);
END;
GO
