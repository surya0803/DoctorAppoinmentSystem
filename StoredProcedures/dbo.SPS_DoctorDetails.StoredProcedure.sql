/****** Object:  StoredProcedure [dbo].[SPS_DoctorDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPS_DoctorDetails]
AS
Begin
Select Id, HospitalId,UserName,Password,Name,DOB,Gender,PhoneNumber,Address,Specialization,Experience,Image,CreatedBy,CreatedDateTime,UpdatedBy,UpdatedDateTime from doctor;
END
GO
