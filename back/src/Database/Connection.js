import Database from 'better-sqlite3';
import Users from './Controller/Users';

let Connection;
const openConnection = () => {
    try {
        const path = require('path');
        const dbPath = path.resolve(__dirname, './db.sqlite');
        const db = new Database(dbPath); // Use dbPath : Currently using copy 
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
            console.log("Connection Already Openeded, No need to re-open");

        const usersController = await Users(Connection); 

        const controllers = {
            usersController,
        }
        
        return controllers;
    } catch (e) {
        console.log(`Failed to get database connection : ${e}`)
    }
}

export default getConnection;