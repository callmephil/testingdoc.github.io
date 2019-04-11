const queryList = {
    // USERS
        CREATE_USER:`INSERT INTO user_account (firstname, lastname, email, phoneNumber, auth0_sub) VALUES 
        ($firstname, $lastname, $email, $phoneNumber, $auth0_sub)`,
        // UPDATE_USER:`test`,
        BAN_USER:`UPDATE user_account SET disabled = 1 WHERE user_id = ?`,
        GET_USER:`SELECT * FROM user_account WHERE user_id = ?`,
        GET_USER_LIST:`SELECT * FROM user_account`,
    // Groups
        // CREATE_GROUP:`test`,
        // ADD_GROUP_MEMBERS:`test`,    
}


const prepareStmt = (db) => {
    try {
    let stmt = [];

    const a = Object.entries(queryList);
    a.forEach(el => {
        const key = el[0];
        const value = el[1];
        stmt[key] = db.prepare(value);
    });
    return stmt;
    } catch (e)
    {
        console.log(`prepareStmt : ${e}`);
    }
};

const executeToDatabase = (stmt) => {
    try {
        // this is shit. change this thanks.
        const SELECT = (id) => {
            console.log(stmt.get(id));
            return id ? stmt.get(id) : stmt.get();
        };

        const SELECT_ALL = (id) => {
            return id ? stmt.all(id) : stmt.all();
        }

        const INSERT = (props) => {
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

        const DELETE = (id) => {
            const result = stmt.run(id);
            return result.changes;
        };

        const QueryCenter = {
            SELECT,
            SELECT_ALL,
            INSERT,
            UPDATE,
            DELETE,
        };

        return QueryCenter;
    } catch (e) {
        console.log(`preparedQueries error ${e}`);
    }
}

export {
    prepareStmt,
    executeToDatabase
}
