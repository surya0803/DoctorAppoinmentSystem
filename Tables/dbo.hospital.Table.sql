/****** Object:  Table [dbo].[hospital]    Script Date: 08-04-2024 21:48:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hospital](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[State] [bigint] NOT NULL,
	[District] [bigint] NOT NULL,
	[Location] [nvarchar](255) NOT NULL,
	[Pincode] [nvarchar](255) NOT NULL,
	[Address] [nvarchar](255) NOT NULL,
	[PhoneNumber] [nvarchar](255) NOT NULL,
	[Email] [nvarchar](255) NOT NULL,
	[Website] [nvarchar](255) NULL,
	[AdministratorName] [nvarchar](255) NOT NULL,
	[AdministratorUserName] [nvarchar](255) NOT NULL,
	[AdministratorPassword] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[hospital]  WITH CHECK ADD FOREIGN KEY([District])
REFERENCES [dbo].[District] ([Id])
GO
ALTER TABLE [dbo].[hospital]  WITH CHECK ADD FOREIGN KEY([State])
REFERENCES [dbo].[State] ([Id])
GO
