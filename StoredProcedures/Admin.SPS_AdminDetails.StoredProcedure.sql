USE [doctor]
GO
/****** Object:  StoredProcedure [Admin].[SPS_AdminDetails]    Script Date: 11-03-2024 21:47:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--use doctor;

Create proc [Admin].[SPS_AdminDetails]
as 
begin
Select UserName, Password from admin;
end
GO
