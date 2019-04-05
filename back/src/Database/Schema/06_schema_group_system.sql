DROP TABLE IF EXISTS groups;
CREATE TABLE groups (
	group_id integer,
	group_type text,
	group_name integer,
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
);
