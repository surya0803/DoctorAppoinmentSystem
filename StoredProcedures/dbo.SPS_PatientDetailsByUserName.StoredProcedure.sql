USE [doctor]
GO
/****** Object:  StoredProcedure [dbo].[SPS_PatientDetailsByUserName]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--use doctor;
CREATE proc [dbo].[SPS_PatientDetailsByUserName]
@UserName varchar(255)
AS
Begin
Select UserName,Password,Name,Height,Weight,PhoneNumber,Address,Image,UpdatedBy from patient where UserName=@UserName;
END
GO
