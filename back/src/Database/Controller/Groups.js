import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeGroups = async (stmtTable) => {
    try {
        const {GROUP_INS, GROUP_DISABLE, GROUP_MEMBER_INS, GROUP_MEMBER_DEL, GROUP_MEMBER_SEL} = stmtTable;

        const createGroup = (props) => {
            return executeToDatabase(GROUP_INS).INSERT(props);
        }

        const disableGroup = (id) => {
            return executeToDatabase(GROUP_DISABLE).UPDATE(id, []);
        }

        const addGroupMember = (props) => {
            return executeToDatabase(GROUP_MEMBER_INS).INSERT(props);
        }

        const removeGroupMember = (props) => {
            return executeToDatabase(GROUP_MEMBER_DEL).INSERT(props);
        }

        const getGroupMemberForUser = (id) => {

        }

        const getAllGroups = () => {
            // Todo
        }

        const getGroup = () => {
            // Todo
        }

        const controller = {
            createGroup,
            disableGroup,
            addGroupMember,
            removeGroupMember,
        }

        return controller;
    } catch (e) {
        console.log(`initializeGroups ${e}`)
    }
}


export default initializeGroups
