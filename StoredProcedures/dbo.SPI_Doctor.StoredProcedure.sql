/****** Object:  StoredProcedure [dbo].[SPI_Doctor]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPI_Doctor]
@HospitalId bigInt,
  @UserName varchar(255),
  @Password varchar(255),
  @Name varchar(255),
  @Gender int,
  @DOB date,
  @PhoneNumber varchar(10),
  @Address varchar(255),
  @Specialization varchar(255),
  @Experience float,
  @Image varchar(MAX),
  @CreatedBy varchar(255),
  @UpdatedBy varchar(255)
AS
Begin
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
Insert into Doctor
(
HospitalId,
UserName, 
Password, 
Name,
Gender,
DOB,
PhoneNumber, 
Address, 
Specialization, 
Experience, 
Image, 
CreatedBy, 
CreatedDateTime, 
UpdatedBy, 
UpdatedDateTime) 
values
(
@HospitalId,
@UserName, 
@hashedPassword, 
@Name, 
@Gender,
@DOB, 
@PhoneNumber, 
@Address, 
@Specialization, 
@Experience, 
@Image, 
@CreatedBy, 
SYSDATETIME(),
@UpdatedBy, 
SYSDATETIME()
);
END
GO
