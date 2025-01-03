/****** Object:  StoredProcedure [dbo].[SPU_PatientDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPU_PatientDetails]
  @UserName varchar(255),
  @Password varchar(255),
  @Name varchar(255),
  @Height integer,
  @Weight integer,
  @PhoneNumber varchar(10),
  @Address varchar(255),
  @Image varchar(MAX),
  @UpdatedBy varchar(255)
  AS 
  BEGIN
  DECLARE @CheckPassword VARCHAR(255);
  SELECT @CheckPassword = [Password] FROM patient WHERE UserName = @UserName;
  IF @CheckPassword = @Password
  BEGIN
      Update Patient Set
	  Name = @Name,
	  Height = @Height,  
	  Weight = @Weight, 
	  PhoneNumber = @PhoneNumber,
	  Address = @Address, 
	  Image = @Image,
	  UpdatedBy = @UpdatedBy, 
	  UpdatedDateTime = SYSDATETIME()
	  where 
	  UserName= @UserName;
  END
  ELSE
  BEGIN
  DECLARE @hashedPassword NVARCHAR(255);
  SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);
	  Update Patient Set
	  Password = @hashedPassword,
	  Name = @Name,
	  Height = @Height,  
	  Weight = @Weight, 
	  PhoneNumber = @PhoneNumber,
	  Address = @Address, 
	  Image = @Image,
	  UpdatedBy = @UpdatedBy, 
	  UpdatedDateTime = SYSDATETIME()
	  where 
	  UserName= @UserName;
  END
  END
GO
