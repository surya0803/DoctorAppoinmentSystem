USE [doctor]
GO
/****** Object:  StoredProcedure [dbo].[SPS_DoctorAvailability]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SPS_DoctorAvailability]
@UserName varchar(255)
As
BEGIN
Select Availability FROM Doctor WHERE UserName=@UserName;
END
GO
