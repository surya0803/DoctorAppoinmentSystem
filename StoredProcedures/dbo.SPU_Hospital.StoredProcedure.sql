/****** Object:  StoredProcedure [dbo].[SPU_Hospital]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPU_Hospital]
  @Name varchar(255),
  @State bigInt,
  @District bigInt,
  @Location varchar(255),
  @Pincode varchar(255),
  @Address varchar(255),
  @PhoneNumber varchar(255),
  @Email varchar(255),
  @Website varchar(255),
  @AdministratorName varchar(255),
  @AdministratorUserName varchar(255),
  @AdministratorPassword varchar(255)
AS
Begin
DECLARE @CheckPassword VARCHAR(255);
  SELECT @CheckPassword = [AdministratorPassword] FROM hospital WHERE AdministratorUserName =  @AdministratorUserName;

  IF @CheckPassword = @AdministratorPassword
  BEGIN
UPDATE hospital set
Name = @Name,
State = @State,
District = @District,
Location = @Location,
Pincode = @Pincode,
Address = @Address,
PhoneNumber = @PhoneNumber,
Email = @Email,
Website = @Website,
AdministratorName =@AdministratorName
WHERE
AdministratorUserName = @AdministratorUserName
   END
  ELSE
  BEGIN
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @AdministratorPassword), 2);

UPDATE hospital set
Name = @Name,
State = @State,
District = @District,
Location = @Location,
Pincode = @Pincode,
Address = @Address,
PhoneNumber = @PhoneNumber,
Email = @Email,
Website = @Website,
AdministratorName =@AdministratorName,
AdministratorPassword =@hashedPassword
WHERE
AdministratorUserName = @AdministratorUserName
END
END
GO
