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
    USER_SKILLS_SEL: `SELECT * FROM user_skills WHERE user_id = ?`,
    // USER_ASSIGNMENT_INS: `INSERT INTO user_assignment `, TODO
  },
  {
      ASSIGNMENT_INS: `INSERT INTO assignment (mentor_id, task_id, link, message, startDate, endDate) VALUES 
      ($mentor_id, $task_id, $link, $message, $startDate, $endDate)`,
      ASSIGNMENT_DEL: `DELETE FROM assignment WHERE assignment_id = ?`,
      ASSIGNMENT_UPD: `UPDATE assignment set task_id = $task_id, link = $link, message = $message, startDate = $startDate, endDate = $endDate 
      WHERE assignment_id = ?`,
      ASSIGNMENT_SEL_ALL: `SELECT * FROM assignment`,
      ASSIGNMENT_SEL: `SELECT * FROM assignment where assignment_id = ?`,
  },
  // GROUPS
  {},
  // TASKS
  {},
  // PROJECTS
  {}
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
