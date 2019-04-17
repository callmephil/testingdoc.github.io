DROP TABLE IF EXISTS user_account;
CREATE TABLE user_account (
	user_id integer PRIMARY KEY AUTOINCREMENT,
	firstname text NOT NULL,
	lastname text NOT NULL,
	email text UNIQUE,
	phoneNumber text,
	auth0_sub text UNIQUE,
	security_level integer DEFAULT 0,
	disabled integer DEFAULT 0
);

DROP TABLE IF EXISTS user_links;
CREATE TABLE user_links (
	user_id integer NOT NULL,
	link_type text NOT NULL,
	link text UNIQUE,
	last_update datetime,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_notes;
CREATE TABLE user_notes (
	mentor_id integer NOT NULL DEFAULT -1,
	user_id integer NOT NULL DEFAULT -1,
	type text NOT NULL DEFAULT 'internal',
	activity_id integer DEFAULT -1,
	comment text NOT NULL DEFAULT '',
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
	FOREIGN KEY(mentor_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_attendance;
CREATE TABLE user_attendances (
	user_id integer,
	date datetime,
	time datetime,
	status integer DEFAULT 0,
	reason text DEFAULT NULL,
	key_amount integer DEFAULT 0,
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS user_attendance_streak;
CREATE TABLE user_attendance_streak (
	user_id integer,
	streak integer DEFAULT 0,
	max_streak integer DEFAULT 0,
	FOREIGN KEY(user_id)
	REFERENCES user_account(user_id)
);

DROP TRIGGER IF EXISTS aft_insert_user_account;
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

DROP TABLE IF EXISTS assignment;
CREATE TABLE assignment (
	assignment_id integer PRIMARY KEY AUTOINCREMENT,
	mentor_id integer NOT NULL,
	task_id integer NOT NULL DEFAULT -1,
	link text NOT NULL,
	message text NOT NULL,
	key_range NOT NULL DEFAULT 0,
	startDate datetime,
	endDate datetime,
	FOREIGN KEY(mentor_id) 
    REFERENCES user_account(user_id) 
);


DROP TABLE IF EXISTS user_assignment;
CREATE TABLE user_assignment (
	user_id integer,
	assignment_id integer,
	submission_link text NOT NULL,
	isCompleted integer NOT NULL DEFAULT 0,
	key_amount integer DEFAULT 0,
	FOREIGN KEY(user_id)
    REFERENCES user_account(user_id) 
	FOREIGN KEY(assignment_id)
	REFERENCES assignment(assignment_id)
);

DROP TABLE IF EXISTS skill_table;
CREATE TABLE skill_table (
	skill_id integer PRIMARY KEY AUTOINCREMENT,
	name text NOT NULL,
	max_value integer DEFAULT 3,
	isStackable integer DEFAULT 0
);

DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
	task_id integer PRIMARY KEY AUTOINCREMENT,
	link text NOT NULL UNIQUE,
	type integer NOT NULL DEFAULT 0,
	name text NOT NULL DEFAULT '',
	isRepeatable integer DEFAULT 0
);

DROP TABLE IF EXISTS task_propreties;
CREATE TABLE task_propreties (
	task_id integer,
	skill_id integer NOT NULL DEFAULT -1,
	key_range integer NOT NULL DEFAULT 0,
	FOREIGN KEY(task_id) 
    REFERENCES tasks(task_id) 
	FOREIGN KEY(skill_id) 
    REFERENCES skill_table(skill_id) 
);

DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	project_id integer PRIMARY KEY AUTOINCREMENT,
	project_name text NOT NULL DEFAULT ''
);

DROP TABLE IF EXISTS projects_tasks;
CREATE TABLE projects_tasks (
	project_id integer,
	task_id integer,
	FOREIGN KEY(project_id) 
    REFERENCES projects(project_id) 
	FOREIGN KEY(task_id) 
    REFERENCES tasks(task_id) 
);

DROP TABLE IF EXISTS project_competencies;
CREATE TABLE project_competencies (
	project_id integer,
	skill_id integer,
	FOREIGN KEY(project_id) 
    REFERENCES projects(project_id) 
	FOREIGN KEY(skill_id) 
    REFERENCES skill_table(skill_id)
);

DROP TABLE IF EXISTS groups;
CREATE TABLE groups (
	group_id integer PRIMARY KEY AUTOINCREMENT,
	group_type text NOT NULL DEFAULT 'research',
	group_name integer NOT NULL DEFAULT '',
	project_id integer,
	FOREIGN KEY(project_id) 
    REFERENCES projects(project_id) 
);

DROP TABLE IF EXISTS group_members;
CREATE TABLE group_members (
	group_id integer,
	user_id integer,
	FOREIGN KEY(group_id) 
    REFERENCES groups(group_id) 
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);

DROP TABLE IF EXISTS group_scrum;
CREATE TABLE group_scrum (
	group_id integer,
	user_id integer,
	startDate datetime,
	endDate datetime,
	FOREIGN KEY(group_id) 
    REFERENCES groups(group_id) 
	FOREIGN KEY(user_id) 
    REFERENCES user_account(user_id) 
);
