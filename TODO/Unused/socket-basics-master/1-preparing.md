# 1 - Preparing

We will begin with preparing the terrain.  
In order to test our react app connected to a server, we need to run **two** servers:

- the first is our actual server, and takes care of answering requests
- the second is a server that we use only to refresh our react app every time we change something. This second server *is not useful* in production, but it is useful as long as we're developing.

Luckily, we don't have to invent the second one; `create-react-app` does it for us. But we do have to create the first one.


## Creating the Project's Files

First, create a directory for the project (`> mkdir project`) and enter it (`> cd project`). You can also use your GUI if you prefer, "create new directory", call it `project`, enter it, then right click and run "open terminal here".

### Create the Front

Use create-react-app to create a front end application

```sh
> create-react-app front --use-npm
```

`--use-npm` forces create-react-app to ...use `npm`. If you don't specify it, it may use `yarn`; there's nothing specifically wrong with that, but for the purposes of the exercise, it is preferable that everyone uses the same package manager.

You now have a directory called `project`. Inside, there's a directory called `front`, which hosts React files

Try running it; go in the project's directory, and run `npm start`. This should auto-launch your browser and show you a simple page. If it doesn't automatically, open your browser and navigate yourself to http://localhost:3000 

### Create the Back

Let's create the server project:

- Inside the top directory, create the project's directory (e.g. `> mkdir back` and `> cd back` or through GUI)
- run `npm init` inside of it
- install the necessary stuff: `npm install --save socket.io nodemon`. Those are the modules we'll use
- create a new file `index.js` to store our server code in.

You now have a directory called `back`. Inside, there's the `index.js` that will store the server code.

You should have the following structure:  
```
project
│
├── back
│   ├── node_modules
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
└── front
    ├── node_modules
    ├── package.json
    ├── public
    ├── README.md
    ├── src
    │   │
    │   └── ... a few files generate by create-react-app
    └── package-lock.json

```

Verify your structure looks like the above.

## Add Some Server Code

in `back/server.js`, add the following:

```js
const http = require('http')

const server = http.createServer()

const handleRequest = (req, res) => {
  res.end('ok')
}

server.on('request', handleRequest)
server.listen(8888, ()=> console.log(`server is ready`))

```

You can run this file:

```sh
> node ./back/index.js
```

You should read "server is ready". Open your browser, navigate to http://localhost:8888, and you should see `ok`.

This indicates that the server is listening and working. We picked the port `8888` because create-react-app already uses `3000`.

Congrats, your server functions, even if all it knows to do is say `ok`!

## Initiating a Git Repository

In the top folder, create a git repository:

```sh
> git init
```

create a `.gitignore` file to instruct git about what it *shouldn't* track, and put in it:  
```
**/*node_modules
```

This will tell git to not track any folder called `node_modules` (we don't want the modules to be in git)

Verify that things look fine by running:   
```sh
> git add -A -n
```

`-A` tells git to add everything. `-n` tells git to run a simulation, so it shows you which files *would* be added, but doesn't actually do anything.

Read the output, if everything looks fine, then run:  
```sh
> git add -A
```

This adds all the files to staging. Then:  
```sh
> git commit -m "first commit"
```

Create a repository, push your code to it. Send us the link. <kbd>🔑</kbd>

Congrats! You're ready to start.

Move to the [second part](2-first_steps.md)