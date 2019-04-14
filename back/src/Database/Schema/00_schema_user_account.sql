DROP TABLE IF EXISTS user_account;
CREATE TABLE user_account (
	user_id integer PRIMARY KEY AUTOINCREMENT,
	firstname text,
	lastname text,
	email text,
	phoneNumber text,
	auth0_sub text,
	security_level integer DEFAULT 0,
	disabled integer DEFAULT 0
);

DROP TABLE IF EXISTS user_links;
CREATE TABLE user_links (
	user_id integer,
	link_type text,
	link text,
	last_update datetime
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS mentor_comments;
CREATE TABLE mentor_comments (
	user_id integer,
	mentor_id integer,
	comment_type text,
	comment text
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
	FOREIGN KEY(mentor_id) 
    REFERENCES user_account(user_id) 
);


