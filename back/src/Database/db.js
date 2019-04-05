// const initializeDatabase = async () => {
//   // Force to use the current dir path
//   const path = require('path');
//   const dbPath = path.resolve(__dirname, './db.sqlite');
//   dbHolder.db = await sqlite.open(dbPath);
//   //db.then(result => { return result });

//   //#region User_Queries
//   const createUserIfNotExists = async props => {
//     const {
//       auth0_sub,
//       nickname
//     } = props;
//     const answer = await db.get(
//       SQL`SELECT user_id FROM users WHERE auth0_sub = ${auth0_sub}`
//     );
//     if (!answer) {
//       await createUser(props)
//       return {
//         ...props,
//         firstTime: true
//       } // if the user didn't exist, make that clear somehow
//     }
//     return props;
//   };

//   /**
//    * Creates a user
//    * @param {Object} props an object containing the properties `auth0_sub` and `nickname`.  
//    */
//   const createUser = async props => {
//     const {
//       auth0_sub,
//       nickname
//     } = props;
//     const result = await db.run(SQL`INSERT INTO users (auth0_sub, nickname) VALUES (${auth0_sub},${nickname});`);
//     return result.stmt.lastID;
//   }
//   //#endregion User_Queries

//   const controller = {
//     // USER ACCOUNT
//     createUserIfNotExists,
//     createUser,
//   }

//   return controller
// }

// export default initializeDatabase
