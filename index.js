const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const authRoutes =  require("./routes/auth.js");
const postRoutes =  require("./routes/posts.js");

app.use(cors())
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Server Side");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
});

app.post("/api/user/register", (req, res) => {
  const { name, email, contact, password, confirmpassword } = req.body;
  const q = "INSERT INTO registered_user (`name`,`email`,`contact`,`password`,`confirmpassword`) VALUES (?)";
  const values = [name, email, contact, password, confirmpassword];
  db.query(q, [values], (err, data) => {
    if (err) {
      return res.json(err);
    }
    res.json(data);
  });
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("Not Connected To Port");
  }
  console.log("Connected To Port");
});
