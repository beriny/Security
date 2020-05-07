// @login & register

const express = require("express");
const router = express.Router();

const Profile = require("../../models/Profile");
const passport = require("passport");

// $router GET api/profiles/test
// @desc 测试请求数据接口
// @access  public
router.get("/test", (req, res) => {
    res.json({msg: "prfile works"})
})


// $router POST api/profiles/add
// @desc 增加数据接口
// @access  private
router.post("/add", passport.authenticate("jwt", {session: false}), (req, res) => {
    const profileFields = {}

    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.descript) profileFields.descript = req.body.descript;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expend) profileFields.expend = req.body.expend;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.remark) profileFields.remark = req.body.remark;

    new Profile(profileFields).save().then(profile => {
        res.json(profile);
    });
})


// $router GET api/profiles/
// @desc 获取所有数据接口
// @access  private
router.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    profile.find()
        .then(profile => {
            if (!profile) {
                return res.status(404).json({msg: "没有内容！"});
            }

            res.json(profile);
        })
        .catch((err) => {res.status(404).json(err)});
})


// $router GET api/profiles/:id
// @desc 获取单个数据接口
// @access  private
router.get("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
    profile.findOne({_id: req.params.id})
        .then(profile => {
            if (!profile) {
                return res.status(404).json({msg: "没有内容！"});
            }

            res.json(profile);
        })
        .catch((err) => {res.status(404).json(err)});
})


// $router GET api/profiles/edit
// @desc 编辑数据接口
// @access  private
router.post("/edit/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
    const profileFields = {}

    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.descript) profileFields.descript = req.body.descript;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expend) profileFields.expend = req.body.expend;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.remark) profileFields.remark = req.body.remark;

    proflie.findOneAndUpdate(
        {_id: req.params.id},
        {$set: profileFields},
        {new: true}
    ).then(profile => res.json(profile))
    .catch((err) => {res.json(err)});

})


// $router DELETE api/profiles/:id
// @desc 删除单个数据接口
// @access  private
router.delete("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
    profile.findOneAndReomve({_id: req.params.id})
        .then(profile => {
            profile.save().then(profile => res.json(profile));
        })
        .catch((err) => {res.status(404).json({msg: "删除失败！"})});
})


module.exports = router;
