DROP TABLE IF EXISTS user_attendance;
CREATE TABLE user_attendances (
	user_id integer,
	date datetime,
	time datetime,
	status integer DEFAULT 0,
	reason text DEFAULT NULL,
	key_amount integer DEFAULT 0
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_attendance_streak;
CREATE TABLE user_attendance_streak (
	user_id integer,
	streak integer DEFAULT 0,
	max_streak integer DEFAULT 0
	FOREIGN KEY(user_id)
	REFERENCES user_account(user_id)
);

DROP TRIGGER aft_insert_user_account;
CREATE TRIGGER aft_insert_user_account AFTER INSERT ON user_account
BEGIN
INSERT INTO user_attendance_streak(user_id)
         VALUES(NEW.user_id);
END;


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