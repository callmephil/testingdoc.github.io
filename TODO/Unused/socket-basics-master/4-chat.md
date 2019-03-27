# Chat

Let's make it so peeps can connect and write some text together.

Here are the specifications of the app:

1 - when a user connects, all users should be notified.
2 - when a user sends a text, all users should receive the text
3 - the text should bear the username that sent it.

## 1 - User Connects

So, let's think a bit. We need to design our API.

When a user connects, he needs to send a signal to the server. We know this signal is already prepared in Socket.io, it's called 'connect'. You remember this part?

```js
// back/index.js
io.on('connection', (socket) => {
    // user has connected 
    // ...
```

Good. But we don't have a way to tell other users that a user has connected.

Let's fix that. We need to re-send this signal to our users. We could just call it something simple like `"connection"`, but it might be confusing to use something that is native to Socket.io. Let's call this `user:new`. This is a nice format, because this way, we can later use `user:nickname` for when the user changes their nickname, `user:quit` for when they quit, and so on.

*important*: this is just "one" way of writing those. It can be absolutely anything. If you decide to use

```js
socket.emit('user has connected yeaaaah')
```

No one is going to stop you (actually, I will stop you). But it's better to be organized.

So, when a user connects, you need to `emit` that he has connected.

Add this inside the `io.on('connection')` block:

```js
// back/index.js
// ...
io.on('connection', (socket) => {

  console.log('a user connected')
    io.emit('user:new')
    // ...
```

Very good, now the server emits to all users that a new user has entered.

However, we aren't listening on the user side, so nothing will happen. Let's fix that.

```js
// front/src/App.js
  //...
  componentDidMount(){
    const socket = io('http://localhost:8888');

    this.setState({socket})

    socket.on('number:change', (clicks) => {
      this.setState({clicks})
    })

    socket.on('user:new', ()=>{
      console.log('a user has connected')
    })
  // ...
```

Now, run the whole app and open your browser console. Open a second window, you should see "a user has connected"

**What Happened?**: 

1. A user connects. He sends the native Socket.io `connection` signal to the server
2. The server receives the signal (`on('connection')`)
3. The server sends sends to all users a signal we called `user:new`
4. Every connected user receives `user:new`

However, we're missing a way to identify the user. Now let's give them a number, or name.

First, in the server, install the [cat-names](https://github.com/sindresorhus/cat-names) library:

```sh
npm install --save cat-names
```

Then, in the server's index.js, put somewhere at the top:

```js
// back/index.js
const catNames = require('cat-names');
```

and, below, where users connect:

```js
// back/index.js
//...
io.on('connection', (socket) => {

  const username = catNames.random()
//...
```

Send the username to all the users with the signal: change `io.emit('user:new')` to `io.emit('user:new',username)`.

Now, when a user connects, the server chooses a random cat name for him/her, and sends it to everyone.
But, and this is important, the user themselves doesn't know their own name. So let's invent a new signal, called `user:me`, to send the user info:

```js
// back/index.js
// sends the new user to everyone
io.emit('user:new',username)
// sends the new user to the user themselves
socket.emit('user:me',username) 
```

Finally, catch those on the client:

```js
// front/src/App.js
//...
    socket.on('user:new', (username)=>{
      console.log('a user called '+username+' has connected')
    })

    // when the user receives their own username, store it in the state
    socket.on('user:me', (username)=>{
      this.setState({username})
    })
//...
```

Don't forget to show this somewhere in the `render` function, or else nothing will show 

**What is happening?**:
1. The user connects and sends a "connect" signal
2. The server receives the signal and chooses a random cat name
3. The server sends to every users the new name
4. Every user receives the signal that a new user has connected, and their name  
5. The server sends to the user themselves their own name
6. The user receives their own name and sets in `state`

Notice: on the *server*, there are TWO object that can `emit`:

- `io.emit(message)` sends a message to ALL users
- `socket.emit(message)` sends a message to the CONNECTED user

On the client, there's only `socket.emit(message)`, which sends a message to the server.

Congrats! Now users can connect and acquire a user name!

Commit ("connection") <kbd>🔑</kbd>

## 2 - Chat Box - Front

First, create the markup needed

1. a div to store all the texts from all the users
2. a form, put inside it:
  - a text input
  - and a button

When the user submits the form:

1. capture the event, and stop it from restarting the page (`preventDefault`)
2. acquire the value of the text box
3. emit a `text` message (`this.state.socket.emit('text',theTextToSend)`). 
4. add a listener to the `text` event: `socket.on('text',(newText)=>console.log(newText))

Commit ("chat - front") <kbd>🔑</kbd>

## 3 - Chat box - Server

Add a listened for when a message is received

```js
socket.on('text',(text)=>{ 
  // do something here
})
```

When a text is received, re-emit it for everyone


Try it. Does it work? Do you see the message in your browser console?

If yes, great!

1. show the message in the render function
2. Add it to an array in the state, call it `messages`, and every time a message is received, add it to the array. Show this array in the render function

...You almost have a chat.

Commit ("chat - back") <kbd>🔑</kbd>

## 4 - Make it real

Do the below, in any order

- Make it so the username is sent with the message, commit ("username") <kbd>🔑🔑</kbd>
- Make the so the messages box scrolls, and always shows the last message, commit ("messages") <kbd>🔑🔑</kbd>
- Make it so a user can change their username, commit ("change username") <kbd>🔑🔑</kbd>
- Make it so when a user starts typing it says so, commit ("user started typing") <kbd>🔑🔑</kbd>
- Make it so when the user stops typing long enough it says so, commit ("user stopped typing") <kbd>🔑🔑</kbd>