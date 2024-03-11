USE [doctor]
GO
/****** Object:  StoredProcedure [Doctor].[SPU_AppoinmentStatus]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [Doctor].[SPU_AppoinmentStatus]
  @Id int,
  @Status int
  as 
  begin
  Update appoinment Set Status=@Status where Id=@Id;
  End
GO
