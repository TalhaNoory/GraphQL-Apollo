Dependencies to install {
    
    1. npm init (Creating package.json file)
    2. npm i --save express concurrently
    (concurrently allows us to run client & server with 1 single command)
    3. npx create-react-app .
    (the '.' is to install where you are in the current folder!)
    4. npm i --save-dev nodemon
    ("start": "node server/server.js",
    "server":"nodemon server/server.js",
    "client":"npm start --prefix client",) Paste these inside the "script" package.json file
    Then to run both(server & client) at the same time by copy/paste the line below!
    ("dev":"concurrently \"npm run server\" \"npm run client\" ",)
    5. npm run dev (To start the server & client)
}

To test something on the fly, without a Front-End
npm install -g json-server(json-server --watch db.json --port 9000)

-------------------------------------------------------

Queris & Mutations {

#CREATE

    mutation AddUser(
        $data:UserInput!
    ) {
        addUser(data:$data) {
            id
            name
            role
        }
    }

-------------------------------------------------------
Query Variables
{
  "data": {
    "id":"",
    "name":"",
    "role":""
  }
}
-------------------------------------------------------

#READ

    query {
        user(id:"ckf2aggbo000101ji0cs6hovq") {
            name
        }
    }

-------------------------------------------------------
Query Variables (NONE!)
-------------------------------------------------------

#UPDATE
    mutation UpdateUser(
        $data:UserInput!
    ) {
        updateUser(data:$data) {
            id
            name
            role
        }
    }

-------------------------------------------------------
Query Variables
{
  "data": {
    "id": "ckf2aggbo000101ji0cs6y4et",
    "name": "Kunde B",
    "role": "CUSTOMER"
  }
}
-------------------------------------------------------

#DELETE
    mutation DeleteUser($id:String!) {
        deleteUser(id:$id)
    }

-------------------------------------------------------
Query Variables
{
  "id": "Type ID Here!"
}
-------------------------------------------------------

}