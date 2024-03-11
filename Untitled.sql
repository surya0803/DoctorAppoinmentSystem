CREATE TABLE [admin] (
  [Id] bigint PRIMARY KEY IDENTITY(1, 1),
  [UserName] nvarchar(255) UNIQUE NOT NULL,
  [Password] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [patient] (
  [Id] bigint PRIMARY KEY IDENTITY(1, 1),
  [UserName] nvarchar(255) UNIQUE NOT NULL,
  [Password] nvarchar(255) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [BloodGroup] int NOT NULL,
  [Gender] int NOT NULL,
  [Height] float NOT NULL,
  [Weight] float NOT NULL,
  [DOB] date NOT NULL,
  [PhoneNumber] nvarchar(255) NOT NULL,
  [Address] nvarchar(255) NOT NULL,
  [Image] nvarchar(255),
  [CreatedBy] nvarchar(255) NOT NULL,
  [CreatedDateTime] datetime NOT NULL,
  [UpdatedBy] nvarchar(255) NOT NULL,
  [UpdatedDateTime] datetime NOT NULL
)
GO

CREATE TABLE [doctor] (
  [Id] bigint PRIMARY KEY IDENTITY(1, 1),
  [UserName] nvarchar(255) UNIQUE NOT NULL,
  [Password] nvarchar(255) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [DOB] date NOT NULL,
  [Gender] int NOT NULL,
  [PhoneNumber] nvarchar(255) NOT NULL,
  [Address] nvarchar(255) NOT NULL,
  [Specialization] nvarchar(255) NOT NULL,
  [Experience] float NOT NULL,
  [Availability] int NOT NULL,
  [Image] nvarchar(255),
  [CreatedBy] nvarchar(255) NOT NULL,
  [CreatedDateTime] datetime NOT NULL,
  [UpdatedBy] nvarchar(255) NOT NULL,
  [UpdatedDateTime] datetime NOT NULL
)
GO

CREATE TABLE [appoinment] (
  [Id] bigint PRIMARY KEY IDENTITY(1, 1),
  [DoctorUserName] nvarchar(255) NOT NULL,
  [PatientUserName] nvarchar(255) NOT NULL,
  [Purpose] nvarchar(255) NOT NULL,
  [Description] nvarchar(255) NOT NULL,
  [Time] datetime NOT NULL,
  [EndTime] datetime NOT NULL,
  [Status] int NOT NULL
)
GO

ALTER TABLE [appoinment] ADD FOREIGN KEY ([PatientUserName]) REFERENCES [patient] ([UserName])
GO

ALTER TABLE [appoinment] ADD FOREIGN KEY ([DoctorUserName]) REFERENCES [doctor] ([UserName])
GO
