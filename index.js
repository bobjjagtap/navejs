const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/login",(req,res)=>{
    res.render("login&signup.ejs");
})
app.listen(port, () => {
    console.log(`${port} working good`);
})