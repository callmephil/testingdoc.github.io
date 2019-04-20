import app from './app'
import Connection from './Database/Connection'
import {isLoggedIn} from './Middleware/auth'
/* Controllers */
import usersControllerApp from './Controller/users'
import attendancesControllerApp from './Controller/attendances'
import assignmentsControllerApp from './Controller/assignments'
import groupsControllerApp from './Controller/groups'
import tasksControllerApp from './Controller/task'
/* Middleware */
import upload from './Middleware/uploads'

// ENVIRONEMENT
const BACK_PORT = process.env.NODE_PORT;

const start = async () => {
    /* Database Controllers */
    const DatabaseControllers = await Connection();
    const {usersController, attendancesController, assignmentsController, groupsController, tasksController} = DatabaseControllers;
    app.get('/', (req, res, next) => res.send('ok'));

    // /* ROUTING DATA'S  */
    const users = await usersControllerApp(usersController, isLoggedIn, upload);
    app.use('/users', users);

    const attendances = await attendancesControllerApp(attendancesController, isLoggedIn, upload);
    app.use('/attendances', attendances);

    const assignments = await assignmentsControllerApp(assignmentsController, isLoggedIn, upload);
    app.use('/assignments', assignments);

    const groups = await groupsControllerApp(groupsController, isLoggedIn, upload);
    app.use('/groups', groups);

    const tasks = await tasksControllerApp(tasksController, isLoggedIn, upload);
    app.use('/tasks', tasks);

    // /* AUTHENTIFICATION <> */
    // app.get('/mypage', isLoggedIn, async ( req, res, next ) => {
    //   try{
    //     const { order, desc } = req.query;
    //     const { sub, nickname} = req.user
    //     const user = await controller.createUserIfNotExists({sub, nickname})
    //     // @Todo
    //     // const result = await controller.getUserProfile({order, desc, author_id:sub})
    //     // user.result = result
    //     res.json({ success: true, result: user });
    //   }catch(e){
    //     next(e)
    //   }
    // })

    app.use((err, req, res, next) => {
        console.error(err)
        const message = err.message
        res.status(500).json({
            success: false,
            message,
        })
    })

    app.listen(BACK_PORT, () => console.log(`server listening on port ${BACK_PORT}`))
}

start();
