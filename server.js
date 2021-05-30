const express = require("express");
const app = express();

const hostname = '0.0.0.0'

app.get("/", (req, res) =>{
    res.send("<h1>Hello Omkar</h1>")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, hostname, ()=>{
    console.log("server is running");
})