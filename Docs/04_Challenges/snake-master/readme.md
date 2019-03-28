# Snake Game

You're going to build a little game of [Snake](http://lmgtfy.com/?q=play+snake+in+the+browser).

Don't freak out, we're going to go slow.

- Fork this repository
- Clone your fork on your pc
- COMMIT AFTER EACH STEP

## Goals

  - Understand time-based programming
  - Capture user input
  - Be able to test and formulate problems
  - **Competencies**:
    - <kbd>Timers</kbd> 
    - <kbd>Real-time graphics manipulation</kbd>
    - <kbd>Randomness</kbd>
    - <kbd>Formulate Systems</kbd>
    - <kbd>Game Design</kbd>
    - <kbd>Canvas</kbd>

## Recommendations

You will find a lot of tutorials online. You are very much invited to follow them, *however*, you will then implement your own following the steps described below.

Specifically, every tutorial you'll find uses *canvas*. In this exercise, you'll move DOM elements.

## Step 1 - Movement

In the beginning, we want to make sure we know how to make things move.

  - create a `snake.js` file
  - create an `index.html` file that uses the Javascript file.
  - create a div, give it some styling so you can see it. This will be the stage. Something like `width:500px; height:500px; background:grey;`
  - create a div, give it some styling so you can see it. This will be our snake. Something like `width:50px; height:50px; background:red;`
  - make it so this div advances of 50px to the right every second. To do that, you will need:
    - to target the div in Javascript (`getElementById` or `querySelector`)
    - give the square some positioning that allows you to place it precisely (css `position` property)
    - make a function that moves it (using `left` or `transform`)
    - then run this function every second
  - commit <kbd>🔑🔑🔑</kbd>

## Step 2 - Control

  - create a button
  - target this button in Javascript
  - when the user clicks it, change the direction of the Snake
  - add 3 other buttons and make them control the 4 directions
  - congrats, you can move the square!
  - optional: capture the keyboard keys to move the square with the keyboard
  - commit <kbd>🔑🔑</kbd>

## Step 3 - Game States

  - In the beginning, the square should be stopped
  - When the user clicks a button / presses spacebar or enter, the game starts
  - commit <kbd>🔑🔑</kbd>

## Step 4 - Randomness

  - make a function that places an apple on the stage. This is also a square div, but green
  - Place it anywhere on the stage, randomly
  - Once this works, perfect the function and make sure the apple is placed:
    - At grid intersections (that is, in intervals of 50px)
    - Never placed where the Snake is
  - commit

## Step 5 - Collisions

  - When the Snake hits a wall, stop the game
  - Add a counter. When the snake hits an apple, place a new apple anywhere (using the same function you created before), and add 1 to the score
  - commit <kbd>🔑</kbd>

## Step 6 - Game implementation

  - Make it so when the snake picks an apple, the tail grows by 1 (create an additional div)
  - *take your time*,  this part isn't always immediately intuitive
  - commit <kbd>🔑🔑</kbd>

## Step 7 - UX Niceties

  - Make it so the snake cannot go back on itself (i.e, it cannot go immediately down if it was going up)
  - Make the snake faster with each apple
  - Make the snake able to collide with its own tail. Stop the game if the snake hits its tail
  - commit <kbd>🔑</kbd>

## Step 8 - Screens

  - Add a game over screen
  - Add a "start game" screen
  - commit <kbd>🔑</kbd>

## Step 9 - Finishing touches

  - add animations, commit <kbd>🔑</kbd>
  - make it look good, commit <kbd>🔑</kbd>
  - add sounds, commit <kbd>🔑</kbd>

## Step 10 - Canvas

  - Without changing most of your code, make it work with canvas
  - commit <kbd>🔑🔑🔑</kbd>