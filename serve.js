const express = require("express");
const app = express()

app.use(express.static('public'));


app.get("/", (req, res) => {
  res.send("hello")
})

app.listen(3000, () => {
  console.log("listening to 3000")
})