const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//This configures so that we can have our environment variables in our .env file
require("dotenv").config();

//create our express server
const app = express();
const port = process.env.PORT || 5000;

//setup our middleware
app.use(cors());
app.use(express.json()); //this will allow us to parse json

const uri = process.env.ATLAS_URI;
//the second argument is to deal with mongodb updates
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("MongoDB database connection established successfully");
  })
  .then(() => console.log("MongoDB Ready to use"))
  .catch(err => console.log(err));

const exerciseRouters = require("./routes/exercises");
const usersRouter = require("./routes/users");

//directing where to go when visit this url
app.use("./exercises", exerciseRouters);
app.use("./users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
