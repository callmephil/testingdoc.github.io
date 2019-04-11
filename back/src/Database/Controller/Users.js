import { executeToDatabase } from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (stmtTable) => {
    try {
        const getUser = (id) => {
            console.log(executeToDatabase(stmtTable.GET_USER).SELECT(id));
            return executeToDatabase(stmtTable.GET_USER).SELECT(id);
        }

        const getAllUsers = () => {
            // return executeToDatabase(stmtTable.SEL_ALL).SELECT_ALL();
        }

        const createUsers = (props) => {
            return executeToDatabase(stmtTable.CREATE_USER).INSERT(props);
        }

        const updateUsers = (id, props) => {
            // return executeToDatabase(stmtTable.UPD_ID).UPDATE(id, props);
        }

        const deleteUsers = (id) => {
            // return executeToDatabase(stmtTable.DEL_ID).DELETE(id);
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
