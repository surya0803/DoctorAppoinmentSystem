/****** Object:  StoredProcedure [dbo].[SPI_Admin]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SPI_Admin]
	@UserName varchar(255),
	@Password varchar(255)
AS
BEGIN
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
	Insert into Admin(UserName,Password)
	values (@UserName,@hashedPassword);
End
GO
