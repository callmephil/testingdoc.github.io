import Database from 'better-sqlite3';
import {prepareStmt} from './Controller/PreparedStatement';
import Users from './Controller/Users';
import Assignments from './Controller/Assignments';
import Groups from './Controller/Groups';
import Task from './Controller/Tasks';

let Connection;
const openConnection = () => {
    try {
        const path = require('path');
        const dbPath = path.resolve(__dirname, './db.sqlite');
        const db = new Database(dbPath);
        return db;
    } catch (error) {
        console.log(`Database Connection failed : ${error}`)
    }
}

const getConnection = async () => {
    try {
        if (!Connection)
            Connection = openConnection();
        else
            console.log('Connection Already Openeded, No need to re-open');

        const stmtData = await prepareStmt(Connection);
        const usersController = await Users(stmtData);
        const assignmentsController = await Assignments(stmtData);
        const groupsController = await Groups(stmtData);
        const tasksController = await Task(stmtData);

        const controllers = {
            usersController,
            assignmentsController,
            groupsController,
            tasksController,
        }

        return controllers;
    } catch (e) {
        console.log(`Failed to get database connection : ${e}`)
        return false;
    }
}

export default getConnection;
