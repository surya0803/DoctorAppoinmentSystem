/****** Object:  Table [dbo].[doctor]    Script Date: 08-04-2024 21:48:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[doctor](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[HospitalId] [bigint] NOT NULL,
	[UserName] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[DOB] [date] NOT NULL,
	[Gender] [int] NOT NULL,
	[PhoneNumber] [nvarchar](255) NOT NULL,
	[Address] [nvarchar](255) NOT NULL,
	[Specialization] [nvarchar](255) NOT NULL,
	[Experience] [float] NOT NULL,
	[Image] [nvarchar](max) NULL,
	[CreatedBy] [nvarchar](255) NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL,
	[UpdatedBy] [nvarchar](255) NOT NULL,
	[UpdatedDateTime] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[doctor]  WITH CHECK ADD FOREIGN KEY([HospitalId])
REFERENCES [dbo].[hospital] ([Id])
GO
