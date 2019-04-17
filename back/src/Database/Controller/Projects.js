import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeProjects = async (stmtTable) => {
    try {
        const { 
            PROJECT_INS, 
            PROJECT_DEL, 
            PROJECT_TASK_INS, 
            PROJECT_TASK_DEL, 
            PROJECT_COMPETENCIES_INS, 
            PROJECT_COMPETENCIES_DEL 
        } = stmtTable;

        const createProject = (props) => {
            return executeToDatabase(PROJECT_INS).INSERT(props);
        }

        const deleteProject = (id) => {
            return executeToDatabase(PROJECT_DEL).DELETE(id);
        }

        const createProjectTask = () => {
            return executeToDatabase(PROJECT_TASK_INS).INSERT(props);
        }

        const deleteProjectTask = () => {
            return executeToDatabase(PROJECT_TASK_DEL).INSERT(props);
        }

        const createProjectCompetencies = (props) => {
            return executeToDatabase(PROJECT_COMPETENCIES_INS).INSERT(props);
        }
        
        const deleteProjectCompetencies = (props) => {
            return executeToDatabase(PROJECT_COMPETENCIES_DEL).DELETE_PROPS(props);
        }

        const controller = {
            createProject,
            deleteProject,
            createProjectTask,
            deleteProjectTask,
            createProjectCompetencies,
            deleteProjectCompetencies
        }
        
        return controller;
    } catch (e) {
    console.log(`initializeProjects ${e}`)
}
}


export default initializeProjects