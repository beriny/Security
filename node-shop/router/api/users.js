// @login & register

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const User = require("../../models/User");
const passport = require("passport");

// $router GET api/users/test
// @desc 返回请求数据
// @access  public
router.get("/test", (req, res) => {
    res.json({msg: "login works"})
})


// $router POST api/users/register
// @desc return register
// @access  public
router.post("/register", (req, res) => {
    // console.log(req.body);

    // 查询数据库中是否有邮箱
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(400).json({email: "邮箱已经被注册！"});
            } else {

                // const avatar = gravatar.url(req.body.email, {s: "200", r: "pg", d: "mm"});

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    // avatar,
                    password: req.body.password
                })

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // Store hash in your password DB.
                        if (err) {
                            throw err;
                        } else {
                            newUser.password = hash;
                            console.log(hash);

                            newUser.save()
                                    .then(user => res.json(user))
                                    .catch((err) => console.log(err));

                        }
                    });
                });
            }
        })
})


// $router POST api/users/login
// @desc 返回token jwt passport
// @access  public
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    // 查询数据库中是否有邮箱
    User.findOne({email})
        .then((user) => {
            if (!user) {
                return res.status(404).json({email: "用户不存在!"});
            }
//          匹配登录密码
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        const rule = {id: req.body.id, name: user.name};
                        jwt.sign(rule, keys.secretOrKey, (err, token) => {
                            if (err) throw err;
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        })
                        if (isMatch) {
                            // res.json({msg: "success"});
                        } else {
                            return res.status(400).json({password: "密码错误"});
                        }
                    }).catch((err) => {console.log(err);});
        })

})


// $router GET api/users/current
// @desc return current user
// @access  private
router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})


// $router GET api/users/test
// @desc 返回请求数据
// @access  public
// router.get("/test", (req, res) => {
//     res.json({msg: "login works"})
// })

module.exports = router;
