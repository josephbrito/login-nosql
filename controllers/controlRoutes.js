const User = require("../model/User");
const bcrypt = require("bcryptjs");

const client = async (req, res) => {
  res.render("index");
};

const register = async (req, res) => {
  const verifyUser = await User.findOne({ username: req.body.username });
  if (verifyUser) return res.status(400).send("username already exist");

  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password),
  });

  try {
    const userSaved = await user.save();
    res.render("index");
  } catch (error) {
    res.send(error);
  }
};

const login = async (req, res) => {
  const verifyUser = await User.findOne({ username: req.body.username });
  if (!verifyUser)
    return res.status(400).send("email or password not found :(");

  const passMatch = bcrypt.compareSync(req.body.password, verifyUser.password);
  if (!passMatch) return res.status(400).send("email or password not found :(");

  res.send(
    "<a target='_blank' href='https://github.com/josephbrito'>user logged :)</a>"
  );
};

module.exports = { register, login, client };
