/****** Object:  StoredProcedure [dbo].[SPS_CheckUserName]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SPS_CheckUserName]
@UserName varchar(255)
AS
BEGIN
Select UserName from patient where UserName=@UserName UNION Select UserName from doctor where UserName=@UserName;
END
GO
