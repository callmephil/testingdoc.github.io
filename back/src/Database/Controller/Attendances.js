import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeTasks = async stmtTable => {
    try {
        const {
            ATTENDANCE_INS,
            ATTENDANCE_UPD,
            ATTENDANCE_STREAK_UPD,
        } = stmtTable;

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

        const controller = {
            createAttendance,
            updateAttendance,
            updateAttendanceStreak,
        };

        return controller;
    } catch (e) {
        console.log(`initializeTasks ${e}`);
    }
};

export default initializeTasks;
