const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
dotenv.config();
const connection = require("./connection/connection");
const formModel = require("./model/form");

//connecting to UI
app.use(express.static(__dirname + "/UI"));

/*MIDDLEWARE*/
app.use(express.json());
/*
CORS is shorthand for Cross-Origin Resource Sharing.
 It is a mechanism to allow or restrict requested resources on a
  web server depend on where the HTTP request was initiated. This policy is 
  used to secure a certain web server from access by other website or domain
*/

/*HANDLE FORM*/
app.post("/form", async (req, res) => {
  console.log(req.body);
  if (req.body) {
    try {
      const newEntry = await new formModel(req.body);
      const data = await newEntry.save();
      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(error);
    }
  } else {
    res.status(400).send({ message: "post method must have a body" });
  }
});

const start_server = async () => {
  try {
    await connection();
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start_server();
