DROP TABLE IF EXISTS assignment;
CREATE TABLE assignment (
	assignment_id integer PRIMARY KEY AUTOINCREMENT,
	mentor_id integer NOT NULL,
	task_id integer NOT NULL DEFAULT -1,
	link text NOT NULL,
	message text NOT NULL,
	key_range NOT NULL DEFAULT 0,
	startDate datetime,
	endDate datetime
	FOREIGN KEY(mentor_id) 
    REFERENCES user_account(user_id) 
);


DROP TABLE IF EXISTS user_assignment;
CREATE TABLE user_assignment (
	user_id integer,
	assignment_id integer,
	submission_link text NOT NULL,
	isCompleted integer NOT NULL DEFAULT 0,
	key_amount integer DEFAULT 0
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
	FOREIGN KEY(assignment_id)
	REFERENCES assignment(assignment_id)
);

