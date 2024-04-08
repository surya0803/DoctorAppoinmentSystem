/****** Object:  StoredProcedure [dbo].[SPS_DoctorLogin]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[SPS_DoctorLogin]
@UserName varchar(255),
@Password varchar(255)
as 
begin
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
	Select Id,UserName,Image from doctor where UserName=@UserName AND Password=@hashedPassword;
end
GO
