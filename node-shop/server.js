const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const app = express();

// 引入users.js
const users = require("./router/api/users");

// 引入profiles.js
const profiles = require("./router/api/profiles");

// DB config
const db = require("./config/keys").mongoURI

// connect db
mongoose.connect(db, {useNewUrlParser: true})
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err));

// 使用bodyparser 中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// 对passport初始化
app.use(passport.initialize());
require("./config/passport")(passport);

app.get("/", (req, res) => {
    res.send("hello world");
})

// 使用中间件users.js
app.use("/api/users", users);
// 使用中间件profis.js
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
