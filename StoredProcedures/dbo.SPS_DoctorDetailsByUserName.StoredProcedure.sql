USE [doctor]
GO
/****** Object:  StoredProcedure [dbo].[SPS_DoctorDetailsByUserName]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPS_DoctorDetailsByUserName]
@UserName varchar(255)
AS
Begin
Select 
UserName,
Password,
Name,
PhoneNumber,
Address,
Specialization,
Experience,
Image,
UpdatedBy
from doctor 
where UserName=@UserName;
END
GO
