/****** Object:  StoredProcedure [dbo].[SPS_PatientDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--use doctor;
CREATE proc [dbo].[SPS_PatientDetails]
AS
Begin
Select UserName,Password,Name,BloodGroup,Gender,Height,Weight,DOB,PhoneNumber,Address,Image,CreatedBy,CreatedDateTime,UpdatedBy,UpdatedDateTime from patient;
END
GO
