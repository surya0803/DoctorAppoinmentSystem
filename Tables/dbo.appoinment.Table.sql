/****** Object:  Table [dbo].[appoinment]    Script Date: 08-04-2024 21:48:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[appoinment](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[DoctorId] [bigint] NOT NULL,
	[PatientId] [bigint] NOT NULL,
	[Purpose] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](255) NOT NULL,
	[TimeSlotId] [bigint] NOT NULL,
	[Status] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[appoinment]  WITH CHECK ADD FOREIGN KEY([DoctorId])
REFERENCES [dbo].[doctor] ([Id])
GO
ALTER TABLE [dbo].[appoinment]  WITH CHECK ADD FOREIGN KEY([PatientId])
REFERENCES [dbo].[patient] ([Id])
GO
ALTER TABLE [dbo].[appoinment]  WITH CHECK ADD FOREIGN KEY([TimeSlotId])
REFERENCES [dbo].[timeslot] ([Id])
GO
