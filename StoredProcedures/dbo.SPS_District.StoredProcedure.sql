/****** Object:  StoredProcedure [dbo].[SPS_District]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPS_District]
@StateId bigint
AS
Begin
Select * from district where StateId = @StateId;
END
GO
