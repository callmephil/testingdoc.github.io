const http = require('http')

const server = http.createServer()


const handleRequest = (req, res) => {
  res.end('ok!')
}

server.on('request', handleRequest)
server.listen(8888, ()=> console.log(`server is ready`))


let clicks = 0

const io = require('socket.io')(server);

io.on('connection', (socket) => {

  console.log('a user connected')
	
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
	
  socket.on('increment', () => {
    clicks++
    io.emit('number:change',clicks)
    console.log('number has changed:',clicks)
  });

  socket.on('decrement', () => {
    clicks--
    io.emit('number:change',clicks)
    console.log('number has changed:',clicks)
  });

  socket.emit('number:change',clicks)

});
