/****** Object:  StoredProcedure [dbo].[SPS_Login]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[SPS_Login]
@UserName varchar(255),
@Password varchar(255)
as 
begin
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);

    -- Check in the admin table
    IF EXISTS (SELECT 1 FROM admin WHERE UserName = @UserName AND Password = @hashedPassword)
    BEGIN
        Select Id, UserName, '1' AS UserType from admin where UserName = @UserName AND Password = @hashedPassword;
        RETURN;
    END

    -- Check in another table
    IF EXISTS (SELECT 1 FROM patient WHERE UserName = @UserName AND Password = @hashedPassword)
    BEGIN
        Select Id, UserName,'2' AS UserType from patient where UserName = @UserName AND Password = @hashedPassword;
        RETURN;
    END

	
    IF EXISTS (SELECT 1 FROM doctor WHERE UserName = @UserName AND Password = @hashedPassword)
    BEGIN
        Select Id, UserName,'3' AS UserType from doctor where UserName = @UserName AND Password = @hashedPassword;
        RETURN;
    END

	IF EXISTS (SELECT 1 FROM hospital WHERE AdministratorUserName = @UserName AND AdministratorPassword = @hashedPassword)
    BEGIN
        Select Id, AdministratorUserName AS UserName,'4' AS UserType from hospital where AdministratorUserName = @UserName AND AdministratorPassword = @hashedPassword;
        RETURN;
    END
end
GO
