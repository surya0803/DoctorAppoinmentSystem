USE [doctor]
GO
/****** Object:  StoredProcedure [Admin].[SPS_DoctorDetails]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [Admin].[SPS_DoctorDetails]
AS
Begin
Select UserName,Password,Name,DOB,Gender,PhoneNumber,Address,Specialization,Experience,Image,CreatedBy,CreatedDateTime,UpdatedBy,UpdatedDateTime from doctor;
END
GO
