import { executeToDatabase } from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (stmtTable) => {
    try {
        const getUser = (id) => {
            // console.log(stmtTable.GET_USER.get(id));
            return executeToDatabase(stmtTable.GET_USER).SELECT(id);
        }

        const getAllUsers = () => {
            return executeToDatabase(stmtTable.GET_USER_LIST).SELECT_ALL();
        }

        const createUser = (props) => {
            return executeToDatabase(stmtTable.CREATE_USER).INSERT(props);
        }

        const updateUser = (id, props) => {
            // return executeToDatabase(stmtTable.UPD_ID).UPDATE(id, props);
        }

        const banUser = (id) => {
            return executeToDatabase(stmtTable.BAN_USER).UPDATE(id);
        }

        const controller = {
            getUser,
            getAllUsers,
            createUser,
            updateUser,
            banUser
        }

        return controller;
    } catch (e) {
        console.log(`initializeUsers ${e}`)
    }
}


export default initializeUsers
