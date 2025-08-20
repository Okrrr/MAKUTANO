create table users(userid int auto_increment, fullname VARCHAR(100),
email VARCHAR(100), password VARCHAR(255), primary key(userid));

create table posts(postid int auto_increment, content TEXT, 
createdate DATETIME default CURRENT_TIMESTAMP(), postowner int,
primary key(postid), foreign key (postowner) references users(userid));

insert into users(fullname, email, password)
values
("Brian Kipngetich", "brian.korir00@gmail.com", "okrrr"),
("Sandra Mayodi", "sandramay@gmail.com", "emotional"),
("Kevin Korir", "kevinkorir@gmail.com", "kichungi");

show tables;
select fullname, email from users;
