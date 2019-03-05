const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
var multer = require("multer");
var upload = multer();
var con = require("./conn");

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.set("view engine", "pug");
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log("the app is rumming on localhost:3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/welcomePage.html");
});
con.connect();
app.post("/signIn", upload.array(), (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sql = `select * from user where email='${email}';`;

  con.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length === 0) {
      res.json({
        result: `No such member`
      });
    } else if (password === result[0].password) {
      res.json({
        result: "success"
      });
    } else
      res.json({
        result: `Wrong password`
      });
  });
});

app.post("/signUp", upload.array(), (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlCheck = `SELECT * FROM user WHERE email="${email}"`;
  const sql = `INSERT INTO user (email,password) VALUES ('${email}','${password}');`;
  con.query(sqlCheck, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      con.query(sql, (err, result) => {
        if (err) throw err;
        res.json({
          result: "success"
        });
      });
    } else {
      res.json({
        result: `${email} already been registered`
      });
    }
  });
});
