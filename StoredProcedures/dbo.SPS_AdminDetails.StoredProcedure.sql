/****** Object:  StoredProcedure [dbo].[SPS_AdminDetails]    Script Date: 08-04-2024 21:47:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--use doctor;

CREATE proc [dbo].[SPS_AdminDetails]
as 
begin
Select UserName, Password from admin;
end
GO
