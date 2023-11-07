const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const cookie = require("cookie");

// models
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "UserName is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
    },
    customerID: {
        type: String,
        default: " ",
    },
    subscription: {
        type: String,
        default: " ",
    },
});

// hashed passwords
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//match password
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Sign token
userSchema.methods.getSignedToken = function (res) {
    const payload = { id: this._id };

    const accessToken = JWT.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: process.env.JWT_ACCESS_EXPIREIN,
    });

    const refreshToken = JWT.sign(payload, process.env.JWT_REFRESH_TOKEN, {
        expiresIn: process.env.JWT_REFRESH_EXPIREIN,
    });

    const MAX_COOKIE_AGE = 86400 * 7000;
    res.cookie("refreshToken", refreshToken, { maxAge: MAX_COOKIE_AGE, httpOnly: true });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
