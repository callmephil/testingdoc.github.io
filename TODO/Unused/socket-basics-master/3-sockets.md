# Sockets

We will now begin introducing sockets. To begin, we'll just make a button that, when clicked, increments a number that everyone can see

## Server

in `back/index.js`, set up a super-simple socket server. At the bottom of the file, add:

```js
// import the socket.io module
const io = require('socket.io')(server);

// create a variable called 'clicks'
let clicks = 0

// "on connection" runs every time a user connects
// everything inside concerns one user
// the "socket" variable represents a connection with that user
io.on('connection', (socket) => {
  
  // this will show in our local console for each connection
  console.log('a user connected')
    
  // this will show in our local console for each disconnection
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // The two lines above are part of normal, regular
  // socket.io messaging. They are baked in and we do not
  // control when they happen or how

  // now, let's create our own messages

  // we create a message "increment". This message...
  socket.on('increment', () => {
    // increments the "clicks" number
    clicks++
    // and sends a message to everyone with the new number
    io.emit('number:change',clicks)
  });

  // we create a message "decrement". This message...
  socket.on('increment', () => {
    // decrements the "clicks" number
    clicks--
    // and sends a message to everyone with the new number
    io.emit('number:change',clicks)
  });

  // this will run immediately when a user connects.
  // NOTICE: io.emit sends to ALL users.
  // socket.emit sends to the socket, that is, the CONNECTED user
  socket.emit('number:change',clicks)

});
```

## Client

In order for the client (browser) to communicate with the server, we're going to need to install socket.io in the client too. So, go to `/front`, and run

```sh
> npm install --save socket.io-client
```

This adds the client part of the `socket.io` framework.

Then, import it in `front/src/App.js`; towards the top of the file, add:

```js
import io from 'socket.io-client'
```

Then, lower, in  the same file: 

```js
class App extends Component{

  // the state will hold: 
  // - amount of clicks (from the server)
  // - the `socket` connection
  state = { socket:null, clicks:0 }

  // componentDidMount runs at the very start of the component's life
  // that is, it will run when the component is in the document
  componentDidMount(){
    // we begin by creating the socket object and connecting it to the server
    const socket = io('http://localhost:8888');
    // now, this `socket` object is a link to the server
    // let's store it so we can use it later
    this.setState({socket})

    // let's add a listener
    // this listener will react to the server emitting "number:change"
    socket.on('number:change', (clicks) => {
      // when clicks is received from the server, the state will change and reflect the amount of clicks accordingly
	  this.setState({clicks})
    })
  }

  // this function runs before the component is destroyed
  // it's an occasion to do some cleaning up
  componentWillUnmount(){
    // let's kill the connection
    this.state.socket.close()
    // and destroy the socket object
    this.state.socket = null
  }

  // this is a function that sends the "increment" message to the server
  onIncrement = () => this.state.socket.emit('increment')
  
  // this is a function that sends the "decrement" message to the server
  onDecrement = () => this.state.socket.emit('decrement')
  
  render(){
    // your turn.
    // render:
    // - a text that shows the `clicks`
    // - two buttons, with "+" and "-"
    // when the + button is pressed, send an "increment" message to the server
    // when the - button is pressed, send a "decrement" message to the server
  }
}
```

If you do your job correctly, you can now open two browser windows and see them communicate

## Commit

call it "incremental button"; push <kbd>🔑🔑🔑🔑🔑</kbd>

Head to the [last part](4-chat.md)!