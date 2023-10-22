const express = require("express");
const app = express()
app.use(express.static('public'));

app.get("/api",(req,res)=>{res.send("api response")})
app.listen(3000, () => {
  console.log("listening to 3000")
})