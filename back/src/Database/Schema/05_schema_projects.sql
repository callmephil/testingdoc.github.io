DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	project_id integer,
	project_name text
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
);