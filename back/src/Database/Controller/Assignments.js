import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeTasks = async stmtTable => {
    try {
        const {
            ASSIGNMENT_SEL,
            ASSIGNMENT_SEL_ALL,
            ASSIGNMENT_INS,
            ASSIGNMENT_DEL,
            ASSIGNMENT_UPD,
        } = stmtTable;

        const getAssignment = (id) => {
            return executeToDatabase(ASSIGNMENT_SEL).SELECT(id);
        }

        const getAllAssignments = (date) => {
            return executeToDatabase(ASSIGNMENT_SEL_ALL).SELECT_ALL(date);
        }

        const createAssignment = (props) => {
            return executeToDatabase(ASSIGNMENT_INS).INSERT(props);
        };

        const updateAssignment = ({assignment_id, ...props}) => {
            return executeToDatabase(ASSIGNMENT_UPD).UPDATE(assignment_id, props);
        }

        const deleteAssignment = (id) => {
            return executeToDatabase(ASSIGNMENT_DEL).DELETE(id);
        }

        const controller = {
            getAssignment,
            getAllAssignments,
            createAssignment,
            updateAssignment,
            deleteAssignment
        };

        return controller;
    } catch (e) {
        console.log(`initializeTasks ${e}`);
    }
};

export default initializeTasks;
