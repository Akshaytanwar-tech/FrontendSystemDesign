var bcrypt = require("bcryptjs");
const User = require("../models/user");
var jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    var salt = await bcrypt.genSaltSync(10);
    var hash = await bcrypt.hashSync(password, salt);

    const user = await User.create({
      username: username,
      email: email,
      password: hash,
    });
    var data = {
      user: user.id,
    };
    var token = jwt.sign(data, "akshay123");
    res.json({ token, user });
  } catch (error) {
    console.log(error);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) {
      res.send("email not found");
    }

    const checkpassword = await bcrypt.compareSync(password, user.password);

    if (!checkpassword) {
      res.send("email and password do not match");
    }
    console.log(checkpassword);
    const data = {
      user: user._id,
    };
    var token = await jwt.sign(data, "akshay123");
    res.json({ token, user });
  } catch (error) {
    console.log(error);
  }
};
