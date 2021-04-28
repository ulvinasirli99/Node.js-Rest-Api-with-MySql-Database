/*

  !This project is Ulvi Nasirov's

*/

var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var fs = require("fs");

var user = {

  "user4" : {
     "name" : "mohit",
     "password" : "password4",
     "profession" : "teacher",
     "id": 4
  }
};

app.get("/listUsers",(req,res) => {

  fs.readFile(__dirname + "/users.json","utf8",function(err,data){

      console.log(data);

      res.end(data);

  });

});


// Todo This line begin has started for Add User

app.post("/addUser",(req,res) =>{

  fs.readFile(__dirname + "/" + "users.json","utf8",(err,data) => {

      data = JSON.parse(data);

      data["user4"] = user["user4"];

      console.log(data);

      res.end(JSON.stringify(data));

  });

});


// Todo This line begin has started for Delete User

app.delete("/deleteUser",function(req,res){

  fs.readFile(__dirname + "/users.json","utf8",function(err,data){

      data = JSON.parse(data);

      delete data["user" + 2];

      console.log(data);

      res.send(JSON.stringify(data));

  });

});



// ? parse requests of content-type - application/json

app.use(bodyParser.json());

// ? parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

// ? simple route
app.get("/", (req, res) => {
  res.send("Welcome");
});


// ? set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Server has bee started in 3000 Port");

});