const Router = require("express").Router;
const db = require("../db");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");


const router = Router();

const weeks = ["week","week","week","week","week"];

router.get("/login", (req, res, next) => {
  db.getDb()
    .db()
    .collection("modulePage")
    .insertOne({ niro: "sss" })
    .then((res) => {
      database = res
      console.log(res);
    })
    .catch();
  res.status(200).json({ niro: "ffff" , id:database.insertedId });
});

router.get("/logins", (req, res, next) => {
  db.getDb()
    .db()
    .collection("modulePage")
    .deleteOne({ niro: "sss" })
    .then((re) => {
      res.status(200).json({ niro: re.niro,week1:weeks });
    })
    .catch();
  
});

router.get("/week", (req, res, next) => {
 
      res.status(200).json({ "week1":weeks });
  
  
});

module.exports = router;
