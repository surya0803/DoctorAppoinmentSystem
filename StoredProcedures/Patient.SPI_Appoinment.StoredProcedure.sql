USE [doctor]
GO
/****** Object:  StoredProcedure [Patient].[SPI_Appoinment]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [Patient].[SPI_Appoinment]
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
