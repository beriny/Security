const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema
const ProfileSchema = new Schema({

    type: {
        type: String
    },
    descript: {
        type: String
    },
    income: {
        type: Number,
        required: true
    },
    expend: {
        type: String,
        required: true
    },
    cash: {
        type: String,
    },
    remark: {
        type: String
    }
})

module.exports = Profile = mongoose.model("profile", ProfileSchema);
