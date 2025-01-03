USE [doctor]
GO
/****** Object:  StoredProcedure [Patient].[SPI_Patient]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--use doctor;
CREATE proc [Patient].[SPI_Patient]
  @UserName  varchar(255),
  @Password  varchar(255),
  @Name varchar(255),
  @Gender int,
  @BloodGroup int,
  @Height float,
  @Weight float,
  @DOB date,
  @PhoneNumber varchar(10),
  @Address varchar(255),
  @Image  varchar(MAX),
  @CreatedBy varchar(255),
  @UpdatedBy varchar(255)
AS
Begin
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
Insert into 
Patient(
UserName,
Password,
Name,
Gender,
BloodGroup,
Height,
Weight,
DOB,
PhoneNumber,
Address,
Image,
CreatedBy,
CreatedDateTime,
UpdatedBy,
UpdatedDateTime) 
values
(@UserName,
@hashedPassword,
@Name,
@Gender,
@BloodGroup,
@Height,
@Weight,
@DOB,
@PhoneNumber,
@Address,
@Image,
@CreatedBy,
SYSDATETIME(),
@UpdatedBy,
SYSDATETIME());
END
--exec SPS_DoctorDetails;

   
GO
