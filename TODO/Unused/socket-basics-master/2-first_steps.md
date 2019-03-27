 # First Steps

We now have:

1. a server that says `ok`.
2. a simple React app

The server is run with `node index.js`. The create-react-app is run with `npm start`. They each have their own `node_modules`. This is all very annoying. Let's make it simpler.

In a first step, we will standardize things so the server also runs with `npm start`.

## Use NPM to run the server

 In `back/package.json`, locate the `scripts` area. It should look like this:

```json
{
 ...
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```

add a script to run `nodemon`:

```json
{
 ...
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  ...
}
```

Now, `npm` start will run `nodemon index.js`. `nodemon` is a replacement for `node` with one key difference: it will restart every time you save your file, which means you do not have to restart the server manually yourself.

Let's try it:

```sh
> npm start
```

then go to [http://localhost:8888/](http://localhost:8888/). If everything works correctly, you should see "ok".

Then, edit `index.js` and change the `"ok"` to `"ok!"`. Save; nodemon should restart the server automatically. Go to `http://locahost:8888` again (or refresh), and verify the text has changed.


## Recap - What did we just install?

 1. in `front`, we installed:
    - `React`, to write dynamic front-end applications using HTML instead of javascript (JSX)
    - `Webpack`, which recompiles our files every time we save a file
    - `Webpack` server, which runs our front-end and restarts it every time we save a file 
 2. in `back`, we installed:
    - `socket.io`, which will help us open permanent connections with browsers
    - `nodemon`, which will restart our server every time we save

When we will want to run our app, we will need to run *both* the front-end webpack server and the back end express server

That means opening two terminals, navigating to both `back` and `front`, and running `npm start` in both. That's annoying! Let's make it better

## NPM Start starts both server and front-end

let's prepare a script to do that:

In the root directory, run

```sh
> npm init
```

This initializes an npm repository in the main directory. Then, 

```sh
npm install --save concurrently
```

We can use `concurrently` to run two (or more) softwares at the same time. In this case, we will run the server and the front-end.

Open `package.json`, locate the `scripts` objects, and add:

```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "cd back && npm start",
    "client": "cd front && npm start",
    "start": "concurrently --kill-others-on-fail --names \"server client\" \"npm run server\" \"npm run client\""
  },
 ...
}
```

We created three new script:

- `npm run server` will run the server (without having to go to its directory)
- `npm run client` will run create-react-app (without having to go to its directory)
- `npm start` will run *both*.

Let's try it. Run:

```sh
> npm start
```

This should run the server, and create-react-app. Open your browser, and go to both http://localhost:3000 and http://localhost:8888, and, if everything works correctly, they should both open as expected.

Great!

## NPM Install installs both front and back

Just one more thing to do so everything works nicely: make `npm install` install *all* required modules, in all three directories (main one, front, and back).

open `package.json` again,  locate "scripts", and add:

```json
{
  ...
  "scripts": {
    ...
    "start": "concurrently --kill-others-on-fail --names \"server client\" \"npm run server\" \"npm run client\"",
    "postinstall":"cd front && npm install && cd .. && cd back && npm install"
  },
 ...
}
```

`postinstall` is a special kind of script name; you can run it with `npm run postinstall` like every other script, but it also automatically run after `npm install` runs.

We don't use `concurrently` for installing packages because it's not needed. We just run `npm install` in each directory.

Try it! Go into each directory (main, back, and front), and erase `node_modules`. Then:

```sh
> npm install
```

You should see it installing all the modules in each directory. If it works, you're good!

## Cherry on top:

What we can do now is hide those directories from our working tree so we don't have to see them all the time. I will provide instructions for VSCode, but you can certainly accomplish the same in other softwares.

- In VSCode, press <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> (or go "view > command palette")
- In the command palette that opens, begin writing `workspace` and select the entry `preferences:Open Workspace Settings`
- In the left panel, you will see an entry called "files.exclude". Click on the little pen icon to copy it to your settings.
- Then, in the copied list, add a new item `"**/node_modules":true`. Save; you should see all the `node_modules` folders disappear.
- You can do the same and add `package-lock.json`, `.gitignore`, or other files you aren't going to open

## Do we have to do this every time?

Kinda. On the upside, once you're used to it, it can be very fast. You can also keep a repository that you can re-use.

Other options:

1. use Razzle. Razzle comes pre-packaged with a server and a client and everything just works with one command. However, Razzle doesn't play nice with socket.io, so it would be a bother to use in this example
2. use this repo :) but I prefer you do the work

Congrats! You're now ready. Time to actually start building the chat app in [part 3](3-sockets.md)!

## Commit

Call it "ready", and push <kbd>🔑</kbd>