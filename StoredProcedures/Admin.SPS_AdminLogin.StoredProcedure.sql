USE [doctor]
GO
/****** Object:  StoredProcedure [Admin].[SPS_AdminLogin]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [Admin].[SPS_AdminLogin]
@UserName varchar(255),
@Password varchar(255)
as 
begin
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
	Select Id,UserName from admin where UserName=@UserName AND Password=@hashedPassword;
end
GO
