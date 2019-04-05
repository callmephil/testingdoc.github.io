const PreparedStatement = {
    Users: {
        
    }
}

const PreparedQueries = (db, statement) => {
    try {
        const stmt = db.prepare(statement);
        
        // this is shit. change this thanks.
        const SELECT = (id) => {
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
    PreparedStatement,
    PreparedQueries
}
