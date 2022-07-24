/*
  --------------------------
  For Basic Server Setup
  --------------------------
  1. create & go to node-project (root folder of the project)
  2. open cmd here & write "npm init -y"
  3. npm i express cors mongodb
  4. npm i -g nodemon (Only one time in a PC)
  --------------------------
  For Express/ Node Server
  --------------------------
  1. require express
  2. create app variable
  3. declare port
  4. set app.get(path, function with request & response params)
  5. listen to port
  6. nodemon index.js
  7. check browser for that port

  ---------------------------
  Connect client & server
  ---------------------------
  1. backend er cmd te, write "npm i cors";
  2. const cors = require('cors');
  3. app.use('cors');
  4. app.use(express.json());

  ---------------------------
  Mongo DB
  ---------------------------
  1. create a node server (above a jmne ase seivabe)
  ---------------------------
  2. Create Atlas
  ---------------------------
  2.1 sign up with goole (preferable)
  2.2 create a cluster
  2.3 create user "risalshaed" & password
  2.4 Network Access --> IP address: allow all
  2.5 database -> connect -> connect with application -> copy code & paste in index.js

  ---------------------------
  CRUD Operation
  ---------------------------
  1. node mongodb CRUD -> Fundamentals
  2. create async run function
  ----------------------------------------------
  Integrate sending data from client to server
  ----------------------------------------------
  1. clien a side a ekta form create krbo
  2. form submit kore, data get krbo & create user object
  3. Server side a, POST method diye, data receieve krbo
  4. client side a, set fetch with post, headers, body
  4. make sure you return a json from the POST API

  ----------------------------------
  Load data to the client side
  ----------------------------------
  1. create & get API in backend
  2. create a query object
  3. collection.find(query)
  4. cursor.toArray()
  5. return the result
  6. fronend theke useEffect diye blog UI te display krbo
*/