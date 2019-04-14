const queryList = [
  // Users
  {
    CREATE_USER: `INSERT INTO user_account (firstname, lastname, email, phoneNumber, auth0_sub) VALUES 
        ($firstname, $lastname, $email, $phoneNumber, $auth0_sub)`,
    UPDATE_USER: `UPDATE user_account SET firstname = $firstname, lastname = $lastname, email = $email, phoneNumber = $phoneNumber WHERE user_id = ?`,
    BAN_USER: `UPDATE user_account SET disabled = 1 WHERE user_id = ?`,
    GET_USER: `SELECT * FROM user_account WHERE user_id = ?`,
    GET_USER_LIST: `SELECT * FROM user_account`,

    USER_LINKS_SEL: `SELECT * FROM user_links WHERE user_id = ?`,
    USER_LINKS_INS: `INSERT INTO user_links (user_id, link_type, link, last_update) VALUES (
        $user_id, $link_type, $link, $last_update)`,
    USER_LINKS_DEL: `DELETE FROM user_links WHERE user_id = ? and link = ?`,
    USER_LINKS_UPD: `UPDATE user_links SET link = $link WHERE user_id = ? and rowId = ?`,

    // Streak, Max_Streak ToMove
    ATTENDANCE_INS: `INSERT INTO user_attendance (user_id, date, status, reason, streak, max_streak, key_amount) VALUES
        ($user_id, $date, $status, $reason, $streak, $max_streak, $key_amount)`,
    //
    USER_SKILLS_INS: `INSERT INTO user_skills (user_id, skill_id, value) VALUES ($user_id, $skill_id, $value)`,
    USER_SKILLS_UPD: `UPDATE user_skills SET value = $value WHERE user_id = $user_id and skill_id = $skill_id`,
    USER_SKILLS_SEL: `SELECT * FROM user_skills WHERE user_id = ?`
    // USER_ASSIGNMENT_INS: `INSERT INTO user_assignment `, TODO
  },
  {
    ASSIGNMENT_INS: `INSERT INTO assignment (mentor_id, task_id, link, message, startDate, endDate) VALUES 
      ($mentor_id, $task_id, $link, $message, $startDate, $endDate)`,
    ASSIGNMENT_DEL: `DELETE FROM assignment WHERE assignment_id = ?`,
    ASSIGNMENT_UPD: `UPDATE assignment set task_id = $task_id, link = $link, message = $message, startDate = $startDate, endDate = $endDate 
      WHERE assignment_id = ?`,
    ASSIGNMENT_SEL_ALL: `SELECT * FROM assignment`,
    ASSIGNMENT_SEL: `SELECT * FROM assignment where assignment_id = ?`
  },
  // GROUPS
  {
    GROUP_INS: `INSERT INTO groups (group_type, group_name, project_id) VALUES
      ($group_type, $group_name, $project_id)`,
    GROUP_DISABLE: `UPDATE groups SET disabled = 1 WHERE group_id = ?`,
    GROUP_MEMBER_INS: `INSERT INTO group_members (group_id, user_id) VALUES ($group_id, $user_id)`,
    GROUP_MEMBER_DEL: `DELETE FROM groups_members WHERE group_id = ? AND user_id = ?`
  },
  // TASKS
  {
    TASK_INS: `INSERT INTO tasks (link, type, name, isRepeatable) VALUES
    ($link, $type, $name, $isRepeatable)`,
    TASK_DEL: `DELETE FROM tasks WHERE task_id = ?`,

    TASK_PROPERTIES_INS:`INSERT INTO task_requirements (task_id, skill_id, key_range) VALUES 
    ($task_id, $skill_id, $key_range)`,
  },
  // PROJECTS
  {
      PROJECT_INS: `INSERT INTO projects (project_name) VALUES ($project_name)`,
      PROJECT_DEL: `DELETE FROM projects WHERE project_id = ?`,
      PROJECT_TASK_INS: `INSERT INTO projects_tasks (project_id, task_id) VALUES ($project_id, $task_id)`,
      PROJECT_TASK_DEL: `DELETE FROM projects_task WHERE task_id = ? AND project_id = ?`,
      PROJECT_COMPETENCIES_INS: `INSERT INTO project_competencies (project_id, skill_id) VALUES ($project_id, $skill_id)`,
      PROJECT_COMPETENCIES_DEL: `DELETE FROM project_competencies WHERE project_id = ? AND skill_id = ?`,
  },
  // SKILLS
  {
    SKILL_INS: `INSERT INTO skill_table (name, max_value, isStackable) VALUES
    ($name, $max_value, $isStackable)`,
    SKILL_UPD: `UPDATE skill_table SET name = $name, max_value = $max_value, isStackable = $isStackable WHERE skill_id = ?`,
    SKILL_DEL: `DELETE FROM skill_table WHERE skill_id = ?`,
  },
];

const prepareStmt = db => {
  try {
    let stmt = [];

    queryList.forEach(element => {
      for (const key in element) {
        stmt[key] = db.prepare(element[key]);
      }
    });

    return stmt;
  } catch (e) {
    console.log(`prepareStmt : ${e}`);
  }
};

const executeToDatabase = stmt => {
  try {
    // this is shit. change this thanks.
    const SELECT = id => {
      return id ? stmt.get(id) : stmt.get();
    };

    const SELECT_ALL = id => {
      return id ? stmt.all(id) : stmt.all();
    };

    const INSERT = props => {
      const result = stmt.run({
        ...props
      });
      return result;
    };

    const UPDATE = (id, props) => {
      props.id = id;
      const result = stmt.run({
        ...props
      });
      return result.changes;
    };

    const DELETE = id => {
      const result = stmt.run(id);
      return result.changes;
    };

    const QueryCenter = {
      SELECT,
      SELECT_ALL,
      INSERT,
      UPDATE,
      DELETE
    };

    return QueryCenter;
  } catch (e) {
    console.log(`preparedQueries error ${e}`);
  }
};

export { prepareStmt, executeToDatabase };
