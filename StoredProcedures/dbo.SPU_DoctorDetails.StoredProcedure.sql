/****** Object:  StoredProcedure [dbo].[SPU_DoctorDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SPU_DoctorDetails]
  @UserName VARCHAR(255),
  @Password VARCHAR(255),
  @Name VARCHAR(255),
  @PhoneNumber VARCHAR(10),
  @Address VARCHAR(255),
  @Specialization VARCHAR(255),
  @Experience FLOAT,
  @Image VARCHAR(MAX),
  @UpdatedBy VARCHAR(255)
AS
BEGIN
  DECLARE @CheckPassword VARCHAR(255);
  SELECT @CheckPassword = [Password] FROM doctor WHERE UserName = @UserName;

  IF @CheckPassword = @Password
  BEGIN
    UPDATE Doctor SET
      Name = @Name,
      PhoneNumber = @PhoneNumber,
      Address = @Address,
      Specialization = @Specialization,
      Experience = @Experience,
      Image = @Image,
      UpdatedBy = @UpdatedBy,
      UpdatedDateTime = SYSDATETIME()
    WHERE UserName = @UserName;
  END
  ELSE
  BEGIN
    DECLARE @hashedPassword NVARCHAR(255);
    SET @hashedPassword = CONVERT(NVARCHAR(255), HASHBYTES('SHA2_256', @Password), 2);

    UPDATE Doctor SET
      Password = @hashedPassword,
      Name = @Name,
      PhoneNumber = @PhoneNumber,
      Address = @Address,
      Specialization = @Specialization,
      Experience = @Experience,
      Image = @Image,
      UpdatedBy = @UpdatedBy,
      UpdatedDateTime = SYSDATETIME()
    WHERE UserName = @UserName;
  END
END
GO
