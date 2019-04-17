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
