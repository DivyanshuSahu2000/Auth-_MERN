const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
    await newUser.save();
    res.status.json(201)({
      message: "user registered Successfully",
    });
  } catch (error) {
    res.status.json(500)({
      error: error.message,
      message: "server error",
    });
  }
};
module.exports = { registerUser };
