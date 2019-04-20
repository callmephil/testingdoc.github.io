import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeUsers = async (stmtTable) => {
    try {
        const {
            USER_SEL, USER_SEL_ALL, USER_INS, USER_UPD, USER_BAN, USER_LINKS_SEL, USER_LINKS_INS, USER_LINKS_UPD,
            USER_LINKS_DEL, USER_SKILLS_SEL, USER_SKILLS_INS, USER_SKILLS_UPD, USER_COMPETENCIES_INS, USER_COMPETENCIES_SEL,
            USER_COMPETENCIES_UPD, USER_NOTES_INS, USER_NOTES_UPD, USER_NOTES_DEL, USER_NOTES_SEL, USER_NOTES_SEL_ALL,
            ATTENDANCE_INS, ATTENDANCE_UPD, ATTENDANCE_STREAK_UPD, USER_TASKS_INS, USER_TASKS_UPD, USER_TASKS_DEL,
            USER_TASKS_SEL, USER_TASKS_SEL_ALL, USER_ASSIGNMENT_INS, USER_ASSIGNMENT_UPD, USER_ASSIGNMENT_DEL,
            USER_ASSIGNMENT_SEL, USER_ASSIGNMENT_SEL_ALL,
        } = stmtTable;

        const getUser = (id) => {
            return executeToDatabase(USER_SEL).SELECT(id);
        }

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
            return executeToDatabase(USER_BAN).UPDATE(user_id, {});
        }

        const getUserLink = ({user_id}) => {
            return executeToDatabase(USER_LINKS_SEL).SELECT(user_id);
        }

        const createUserLink = (props) => {
            return executeToDatabase(USER_LINKS_INS).INSERT(props);
        }

        const updateUserLink = ({row_id, ...props}) => {
            return executeToDatabase(USER_LINKS_UPD).UPDATE(row_id, props);
        }

        const deleteUserLink = (props) => {
            return executeToDatabase(USER_LINKS_DEL).DELETE_PROPS(props);
        }

        const getUserSkills = ({user_id}) => {
            return executeToDatabase(USER_SKILLS_SEL).SELECT_ALL(user_id)
        }

        const createUserSkills = (props) => {
            return executeToDatabase(USER_SKILLS_INS).INSERT(props)
        }

        const updateUserSkill = (props) => {
            const {user_id} = props;
            return executeToDatabase(USER_SKILLS_UPD).UPDATE(user_id, props)
        }

        const getUserCompetencies = ({user_id}) => {
            return executeToDatabase(USER_COMPETENCIES_SEL).SELECT_ALL(user_id)
        }

        const createUserCompetencies = (props) => {
            return executeToDatabase(USER_COMPETENCIES_INS).INSERT(props)
        }

        const updateUserCompetencies = (props) => {
            const {user_id} = props;
            return executeToDatabase(USER_COMPETENCIES_UPD).UPDATE(user_id, props)
        }

        const getUserNote = ({user_id}) => {
            return executeToDatabase(USER_NOTES_SEL).SELECT(user_id);
        }

        const getAllUserNotes = () => {
            return executeToDatabase(USER_NOTES_SEL_ALL).SELECT_ALL();
        }

        const createUserNote = (props) => {
            return executeToDatabase(USER_NOTES_INS).INSERT(props);
        }

        const updateUserNote = ({rowId, ...props}) => {
            return executeToDatabase(USER_NOTES_UPD).UPDATE(rowId, props);
        }
        const deleteUserNote = ({rowId, ...props}) => {
            props.id = rowId;
            return executeToDatabase(USER_NOTES_DEL).DELETE_PROPS(props)
        }

        const createAttendance = (props) => {
            return executeToDatabase(ATTENDANCE_INS).INSERT(props);
        };

        const updateAttendance = ({user_id, ...props}) => {
            console.log({
                ...props,
                user_id,
            })
            return executeToDatabase(ATTENDANCE_UPD).UPDATE(user_id, props);
        }

        const updateAttendanceStreak = ({user_id, ...props}) => {
            return executeToDatabase(ATTENDANCE_STREAK_UPD).UPDATE(user_id, props);
        }

        const createUserTask = (props) => {
            return executeToDatabase(USER_TASKS_INS).INSERT(props);
        }

        const updateUserTask = ({user_id, ...props}) => {
            props.user_id = user_id;
            return executeToDatabase(USER_TASKS_UPD).UPDATE(user_id, props);
        }

        const deleteUserTask = (props) => {
            return executeToDatabase(USER_TASKS_DEL).DELETE_PROPS(props);
        }

        const getUserTask = (props) => {
            return executeToDatabase(USER_TASKS_SEL).SELECT_PROPS(props, false);
        }

        const getUserTasks = (user_id) => {
            return executeToDatabase(USER_TASKS_SEL_ALL).SELECT_ALL(user_id);
        }

        const createUserAssignment = (props) => {
            return executeToDatabase(USER_ASSIGNMENT_INS).INSERT(props);
        }

        const updateUserAssignment = ({user_id, ...props}) => {
            return executeToDatabase(USER_ASSIGNMENT_UPD).UPDATE(user_id, props);
        }

        const getUserAssignment = (props) => {
            return executeToDatabase(USER_ASSIGNMENT_SEL).SELECT_PROPS(props, false);
        }

        const getUserAssignments = (user_id) => {
            return executeToDatabase(USER_ASSIGNMENT_SEL_ALL).SELECT_ALL(user_id);
        }

        const deleteUserAssignment = (props) => {
            return executeToDatabase(USER_ASSIGNMENT_DEL).DELETE_PROPS(props);
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
            getUserSkills,
            createUserSkills,
            updateUserSkill,
            getUserCompetencies,
            createUserCompetencies,
            updateUserCompetencies,
            getUserNote,
            getAllUserNotes,
            createUserNote,
            updateUserNote,
            deleteUserNote,
            createAttendance,
            updateAttendance,
            updateAttendanceStreak,
            createUserTask,
            updateUserTask,
            deleteUserTask,
            getUserTask,
            getUserTasks,
            createUserAssignment,
            updateUserAssignment,
            getUserAssignment,
            getUserAssignments,
            deleteUserAssignment,

        }

        return controller;
    } catch (e) {
        console.log(`initializeUsers ${e}`)
    }
}


export default initializeUsers
