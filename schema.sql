CREATE TABLE info (
    listingID int NOT NULL,
    listingDesc varchar(255) NOT NULL,
    isSaved boolean NOT NULL,
    PRIMARY KEY (listingID)
);

CREATE TABLE photos ( 
    id int NOT NULL PRIMARY KEY,
    listingID int NOT NULL,
    photoUrl varchar(255) NOT NULL,
    photoDesc varchar(255) NOT NULL,
    isVerified boolean NOT NULL,
    FOREIGN KEY (listingID) REFERENCES info(listingID)
);

\COPY info FROM './info.csv' DELIMITER ',' CSV HEADER;

\COPY photos FROM './photos.csv' DELIMITER ',' CSV HEADER;
