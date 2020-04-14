DROP TABLE IF EXISTS Post;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS Posttag;
DROP TABLE IF EXISTS dedicatedto;
DROP TABLE IF EXISTS Report;
DROP TABLE IF EXISTS Background;
DROP TABLE IF EXISTS Reason;
DROP TABLE IF EXISTS Share;

CREATE TABLE Post
(
PostID int PRIMARY KEY,
BackgroundID int,
Text	VARCHAR (500),
likes	int,
dislikes	int,
ImgPath VARCHAR (250),
Author	VARCHAR (50),
OriginalLink	VARCHAR (250),
Font	VARCHAR (50),
Color	VARCHAR (50),
IsActive	boolean
);

CREATE Table tag
(
	TagID int Primary Key,
	Name	VARCHAR(250),
	Description	VARCHAR(500)
);

CREATE TABLE postTag(
PostTagID int PRIMARY KEY,
PostID int,
TagID int
);


CREATE TABLE dedicatedto
(
    dedicatedtoid integer PRIMARY KEY,
    postid integer,
    emailaddress VARCHAR(500),
    name VARCHAR(500)
);

CREATE TABLE Report(
ReportID int PRIMARY KEY,
PostID int,
timestamp	timestamp,
reasonID int,
Details	varchar(500)
);

CREATE TABLE Background(
BackgroundID int PRIMARY KEY,
ImgPath varchar(500),
	Name varchar(250)
);

CREATE TABLE Reason(
ReasonID int PRIMARY KEY,
Name varchar(250)
);

CREATE TABLE Share
(
    ShareID int PRIMARY KEY,
	PostID int
);