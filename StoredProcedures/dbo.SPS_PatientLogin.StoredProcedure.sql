/****** Object:  StoredProcedure [dbo].[SPS_PatientLogin]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[SPS_PatientLogin]
@UserName varchar(255),
@Password varchar(255)
as 
begin
DECLARE @hashedPassword NVARCHAR(255);
SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @password), 2);
Select Id,UserName,Image from patient where UserName=@UserName AND Password=@hashedPassword;
end
GO
