const jwt = require("jsonwebtoken");
const secrect = "this is hidden";

module.exports.Auth = async function verify(req, res, next) {
  jwt_token = req.header("auth_token");
  if (!jwt_token) {
    res.json({ message: "token not found" });
  }
  const user = await jwt.verify(jwt_token, secrect, (err, user) => {
    req.token = user.id;
    next();
  });
};
