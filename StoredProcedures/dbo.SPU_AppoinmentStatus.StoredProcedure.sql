/****** Object:  StoredProcedure [dbo].[SPU_AppoinmentStatus]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[SPU_AppoinmentStatus]
  @Id int,
  @Status int
  as 
  begin
  Update appoinment Set Status=@Status where Id=@Id;
  End
GO
