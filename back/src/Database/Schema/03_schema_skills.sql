DROP TABLE IF EXISTS skill_table;
CREATE TABLE skill_table (
	skill_id integer PRIMARY KEY AUTOINCREMENT,
	name text NOT NULL,
	max_value integer DEFAULT 3,
	isStackable integer DEFAULT 0
);
