import { executeToDatabase } from "./PreparedStatement";
import Utils from "../Utils.js";

const initializeSkill = async stmtTable => {
  try {
    const {
        SKILL_INS,
        SKILL_UPD,
        SKILL_DEL
    } = stmtTable;
    
    // const getTask = (id) => {
    //     return executeToDatabase(TASK_INS).SELECT(id);
    // }
    const createSkill = (props) => {
      return executeToDatabase(SKILL_INS).INSERT(props);
    };

    const deleteSkill = (id) => {
      return executeToDatabase(SKILL_DEL).DELETE(id);
    };

    const updateSkill = (id, props) => {
      return executeToDatabase(SKILL_UPD).UPDATE(id, props);
    };

    const controller = {
        createSkill,
        deleteSkill,
        updateSkill
    };

    return controller;
  } catch (e) {
    console.log(`initializeSkill ${e}`);
  }
};

export default initializeSkill;
