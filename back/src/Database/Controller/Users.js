import { PreparedStatement, PreparedQueries } from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (db) => {
    try {
        const statement = PreparedStatement.Users;

        const getUser = (id) => {
            // return PreparedQueries(db, statement.SEL_ID).SELECT(id);
        }

        const getAllUsers = () => {
            // return PreparedQueries(db, statement.SEL_ALL).SELECT_ALL();
        }

        const createUsers = (props) => {
            // return PreparedQueries(db, statement.INS_NEW).INSERT(props);
        }

        const updateUsers = (id, props) => {
            // return PreparedQueries(db, statement.UPD_ID).UPDATE(id, props);
        }

        const deleteUsers = (id) => {
            // return PreparedQueries(db, statement.DEL_ID).DELETE(id);
        }

        const controller = {
            getUser,
            getAllUsers,
            createUsers,
            updateUsers,
            deleteUsers
        }

        return controller;
    } catch (e) {
        console.log(`initializeUsers ${e}`)
    }
}


export default initializeUsers
