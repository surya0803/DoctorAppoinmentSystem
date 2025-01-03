/****** Object:  StoredProcedure [dbo].[SPI_Hospital]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPI_Hospital]
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
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @AdministratorPassword), 2);
Insert into hospital
(
Name,
State,
District,
Location,
Pincode,
Address,
PhoneNumber,
Email,
Website,
AdministratorName,
AdministratorUserName,
AdministratorPassword
) 
values
(
@Name, 
@State, 
@District, 
@Location,
@Pincode, 
@Address, 
@PhoneNumber, 
@Email, 
@Website, 
@AdministratorName,
@AdministratorUserName,
 @hashedPassword
);
END
GO
