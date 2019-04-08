import app from './app'
import Connection from './Database/Connection'
import { isLoggedIn } from './Middleware/auth'
/* Controllers */
import usersControllerApp from './Controller/users'
/* Middleware */
import upload from './Middleware/uploads'

// ENVIRONEMENT
const BACK_PORT = process.env.NODE_PORT;

const start = async () => {
  /* Database Controllers */
  const DatabaseControllers = await Connection();
  const { usersController }  = DatabaseControllers;
  app.get('/', (req, res, next) => res.send("ok"));

  // /* ROUTING DATA'S  */
  const users = await usersControllerApp(usersController, isLoggedIn, upload);
  app.use('/users', users);

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
      message
    })
  })

  app.listen(BACK_PORT, () => console.log(`server listening on port ${BACK_PORT}`))
}

start();
