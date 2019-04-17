import { executeToDatabase } from "./PreparedStatement";
import Utils from "../Utils.js";

const initializeTasks = async stmtTable => {
  try {
    const {
      TASK_INS,
      TASK_DEL,
      ASK_PROPERTIES_INS,
      TASK_PROPERTIES_DEL
    } = stmtTable;
    
    // const getTask = (id) => {
    //     return executeToDatabase(TASK_INS).SELECT(id);
    // }
    const createTask = () => {
      return executeToDatabase(TASK_INS).INSERT(id);
    };

    const deleteTask = () => {
      return executeToDatabase(TASK_DEL).DELETE(id);
    };

    const controller = {};

    return controller;
  } catch (e) {
    console.log(`initializeTasks ${e}`);
  }
};

export default initializeTasks;
