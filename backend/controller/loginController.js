const signupModel = require("../modals/signUpschema");
const secretCode = "this is secret";
const jwt = require("jsonwebtoken");

module.exports.signin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await signupModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.password != password) {
      console.log(user.password, password);
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const payload = { id: user._id };
    const jwt_token = jwt.sign(payload, secretCode);

    res.status(200).json({ id: user._id, userName: user.Name });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
