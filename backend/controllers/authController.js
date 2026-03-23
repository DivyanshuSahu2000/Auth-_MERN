const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "user Already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedpassword,
    });
    if (!name || !email || !password || password.trim().length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }
    await newUser.save();
    // res.status(201).json({
    //   message: "user registered Successfully",
    // });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
    ///////
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "server error",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "server error",
    });
  }
};
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "server error",
    });
  }
};
const logOut = async (req, res) => {
  try {
    res.status(200).json({
      message: "logOut successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "server error",
    });
  }
};
module.exports = { registerUser, loginUser, getUserProfile, logOut };
