DROP TABLE IF EXISTS user_account;
CREATE TABLE user_account (
	user_id integer PRIMARY KEY AUTOINCREMENT,
	firstname text NOT NULL,
	lastname text NOT NULL,
	email text UNIQUE,
	phoneNumber text,
	discordId text UNIQUE,
	refresh_token text UNIQUE,
	security_level integer DEFAULT 0,
	disabled integer DEFAULT 0
);

DROP TABLE IF EXISTS user_links;
CREATE TABLE user_links (
	user_id integer NOT NULL,
	link_type text NOT NULL,
	link text UNIQUE,
	last_update datetime
	FOREIGN KEY(user_id)
    REFERENCES user_account(user_id)
);


-- Get RowID HERE instead of note_id...
DROP TABLE IF EXISTS user_notes;
CREATE TABLE user_notes (
	mentor_id integer NOT NULL DEFAULT -1,
	user_id integer NOT NULL DEFAULT -1,
	type text NOT NULL DEFAULT 'internal',
	activity_id integer DEFAULT -1,
	comment text NOT NULL DEFAULT ''
	FOREIGN KEY(user_id)
    REFERENCES user_account(user_id)
	FOREIGN KEY(mentor_id)
    REFERENCES user_account(user_id)
);


