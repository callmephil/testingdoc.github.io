import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (stmtTable) => {
    try {
        const { USER_SEL, USER_SEL_ALL, USER_INS, USER_UPD, USER_BAN, USER_LINKS_SEL, USER_LINKS_INS, USER_LINKS_UPD, USER_LINKS_DEL} = stmtTable;

        const getUser = (id) => {
            return executeToDatabase(USER_SEL).SELECT(id);
        }
        //
        const getAllUsers = () => {
            return executeToDatabase(USER_SEL_ALL).SELECT_ALL();
        }
        
        const createUser = (props) => {
            return executeToDatabase(USER_INS).INSERT(props);
        }
        
        const updateUser = ({user_id, ...props}) => {
            return executeToDatabase(USER_UPD).UPDATE(user_id, props);
        }
        const banUser = ({user_id}) => {
            return executeToDatabase(USER_BAN).UPDATE(user_id);
        }
        
        const getUserLink = ({user_id}) => {
            return executeToDatabase(USER_LINKS_SEL).SELECT(user_id);
        }
        
        const createUserLink = (props) => {
            return executeToDatabase(USER_LINKS_INS).INSERT(props);
        }
        
        const updateUserLink = ({id, ...props}) => {
            return executeToDatabase(USER_LINKS_UPD).UPDATE(id, props);
        }
        
        const deleteUserLink = (id) => {
            return executeToDatabase(USER_LINKS_DEL).DELETE(id);
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
