/****** Object:  StoredProcedure [dbo].[SPS_DoctorAvailability]    Script Date: 08-04-2024 21:47:08 ******/
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
