const router = require("express").Router();
let User = require("../models/user.model"); //requiring the model we created earlier

router.route("/").get((req, res) => {
  //returns all the users in a json format
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).status.json("Error: " + err));
});

router.route("/add").post((res, req) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error " + err));
});
