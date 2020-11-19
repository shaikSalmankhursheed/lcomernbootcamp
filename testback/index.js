const express = require("express");

const app = express();

const port = 8000;
const isoggedIn = (req,res,next)=>{

    console.log("isLoggedin is also Running LOL");
    next();
}
const isAdmin = (req , res , next) => {
    console.log("Admin is running")
    next();
}
const admin = (req, res) => {
    return res.send("Admin Dashboard ADMIN");
};

app.get("/admin" , isoggedIn, isAdmin, admin);


app.get("/salman" , (req, res) => {
    return res.send("salman is slim");
} );

app.get("/hitesh" , (req, res) => {
    return res.send("hitesh uses instagram");
} );

app.get("/signout" , (req, res) => {
    return res.send("You have signed out");
} );

app.get("/" , (req, res) => {
    return res.send("Home page");
} );

app.get("/login" , (req, res) => {
    return res.send("you are visiting login route");
} );

app.listen(port, () => {
    console.log("Server is up and running on http://localhost:8000")
})
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))