import {executeToDatabase} from './PreparedStatement';
import Utils from '../Utils.js';

const initializeGroups = async (stmtTable) => {
    try {
        const { GROUP_INS } = stmtTable;

        const Example = () => {
            return executeToDatabase(GROUP_INS).INSERT(id);
        }

        const controller = {
            Example,
        }
        
        return controller;
    } catch (e) {
    console.log(`initializeGroups ${e}`)
}
}


export default initializeGroups