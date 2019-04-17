import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeProjects = async (stmtTable) => {
    try {
        const { PROJECT_INS } = stmtTable;

        const Example = () => {
            return executeToDatabase(PROJECT_INS).INSERT(id);
        }

        const controller = {
            Example,
        }
        
        return controller;
    } catch (e) {
    console.log(`initializeProjects ${e}`)
}
}


export default initializeProjects