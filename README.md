Dependencies to install {
    
    1. npm init (Creating package.json file)
    2. npm i --save express concurrently
    (concurrently allows us to run client & server with 1 single command)
    3. npx create-react-app .
    (the '.' is to install where you are in the current folder!)
    4. npm i --save-dev nodemon
    ("start": "node server/index.js",
    "server":"nodemon server/index.js",
    "client":"npm start --prefix client",) Paste these inside the "script" package.json file
    Then to run both(server & client) at the same time by copy/paste the line below!
    ("dev":"concurrently \"npm run server\" \"npm run client\" ",)
    5. npm run dev (To start the server & client)
}

To test something on the fly, without a Front-End
npm install -g json-server(json-server --watch db.json --port 9000)