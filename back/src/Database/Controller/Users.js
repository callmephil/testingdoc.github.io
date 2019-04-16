import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (stmtTable) => {
    try {
        const getUser = (id) => {
            // console.log(stmtTable.GET_USER.get(id));
            return executeToDatabase(stmtTable.USER_SEL).SELECT(id);
        }
        
        const getAllUsers = () => {
            return executeToDatabase(stmtTable.USER_SEL_ALL).SELECT_ALL();
        }
        
        const createUser = (props) => {
            return executeToDatabase(stmtTable.USER_INS).INSERT(props);
        }
        
        const updateUser = (id, props) => {
            return executeToDatabase(stmtTable.USER_UPD).UPDATE(id, props);
        }
        
        const banUser = (id) => {
            return executeToDatabase(stmtTable.USER_BAN).UPDATE(id);
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
