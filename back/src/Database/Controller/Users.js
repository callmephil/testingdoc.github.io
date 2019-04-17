import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (stmtTable) => {
    try {
        const getUser = (id) => {
            return executeToDatabase(stmtTable.USER_SEL).SELECT(id);
        }
        //
        const getAllUsers = () => {
            return executeToDatabase(stmtTable.USER_SEL_ALL).SELECT_ALL();
        }
        
        const createUser = (props) => {
            return executeToDatabase(stmtTable.USER_INS).INSERT(props);
        }
        
        const updateUser = ({user_id, ...props}) => {
            return executeToDatabase(stmtTable.USER_UPD).UPDATE(user_id, props);
        }
        const banUser = ({user_id}) => {
            return executeToDatabase(stmtTable.USER_BAN).UPDATE(user_id);
        }
        
        const getUserLink = ({user_id}) => {
            return executeToDatabase(stmtTable.USER_LINKS_SEL).SELECT(user_id);
        }
        
        const createUserLink = (props) => {
            return executeToDatabase(stmtTable.USER_LINKS_INS).INSERT(props);
        }
        
        const updateUserLink = ({id, ...props}) => {
            return executeToDatabase(stmtTable.USER_LINKS_UPD).UPDATE(id, props);
        }
        
        const deleteUserLink = (id) => {
            return executeToDatabase(stmtTable.USER_LINKS_DEL).DELETE(id);
        }
        
        const controller = {
            getUser,
            getAllUsers,
            createUser,
            updateUser,
            banUser,
            getUserLink,
            updateUserLink,
            createUserLink,
            deleteUserLink,
        }
        
        return controller;
    } catch (e) {
        console.log(`initializeUsers ${e}`)
    }
}


export default initializeUsers
