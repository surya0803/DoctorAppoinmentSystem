/****** Object:  StoredProcedure [dbo].[SPU_AdminDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SPU_AdminDetails]
@UserName varchar(255),
@Password varchar(255)
AS
BEGIN
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
Update Admin set
Password = @hashedPassword
where UserName = @UserName;
END
GO
