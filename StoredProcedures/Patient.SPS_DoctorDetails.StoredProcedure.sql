USE [doctor]
GO
/****** Object:  StoredProcedure [Patient].[SPS_DoctorDetails]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [Patient].[SPS_DoctorDetails]
AS
Begin
Select Id,Name,Specialization from doctor;
END
GO
