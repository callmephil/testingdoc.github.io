DROP TABLE IF EXISTS assignment;
CREATE TABLE assignment (
	assignment_id integer PRIMARY KEY AUTOINCREMENT,
	mentor_id integer,
	task_id integer,
	link text,
	message text,
	startDate datetime,
	endDate datetime,
	FOREIGN KEY(mentor_id) 
    REFERENCES user_account(user_id) 
);


DROP TABLE IF EXISTS user_assignment;
CREATE TABLE user_assignment (
	user_id integer,
	assignment_id text,
	submission_link text,
	isCompleted integer,
	key_amount integer,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

