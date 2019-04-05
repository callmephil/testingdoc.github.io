DROP TABLE IF EXISTS user_attendance;
CREATE TABLE user_attendances (
	user_id integer,
	date datetime,
	status text,
	reason text,
	streak integer,
	max_streak integer,
	key_amount integer,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_tasks;
CREATE TABLE user_tasks (
	user_id integer,
	task_id integer,
	key_amount integer,
	startDate datetime,
	endDate datetime,
	status text,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_skills;
CREATE TABLE user_skills (
	user_id integer,
	skill_id integer,
	value integer,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_competencies;
CREATE TABLE user_competencies (
	user_id integer,
	competencie_id integer,
	value integer,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);