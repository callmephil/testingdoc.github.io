import { executeToDatabase } from "./PreparedStatement";
import Utils from "../Utils.js";

const initializeTasks = async stmtTable => {
  try {
    const {
      TASK_INS,
      TASK_DEL,
      TASK_PROPERTIES_INS,
      TASK_PROPERTIES_DEL
    } = stmtTable;
    
    // const getTask = (id) => {
    //     return executeToDatabase(TASK_INS).SELECT(id);
    // }
    const createTask = (props) => {
      return executeToDatabase(TASK_INS).INSERT(props);
    };

    const deleteTask = (id) => {
      return executeToDatabase(TASK_DEL).DELETE(id);
    };

    const createTaskProperties = (props) => {
      return executeToDatabase(TASK_PROPERTIES_INS).INSERT(props);
    }

    const deleteTaskProperties = (props) => {
      return executeToDatabase(TASK_PROPERTIES_DEL).DELETE_PROPS(props);
    }

    const controller = {
      createTask,
      deleteTask,
      createTaskProperties,
      deleteTaskProperties
    };

    return controller;
  } catch (e) {
    console.log(`initializeTasks ${e}`);
  }
};

export default initializeTasks;
