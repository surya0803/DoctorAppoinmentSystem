/****** Object:  StoredProcedure [dbo].[SPS_HospitalDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SPS_HospitalDetails]
    @UserName VARCHAR(255)
AS 
BEGIN
    IF @UserName IS NULL
    BEGIN
        SELECT * FROM hospital;
    END
    ELSE
    BEGIN
        SELECT * FROM hospital WHERE 
		AdministratorUserName = @UserName OR
		Id = @UserName;
    END
END

GO
