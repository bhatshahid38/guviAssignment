const signupModel = require("../modals/signUpschema");
module.exports.signup = async (req, res) => {
  try {
    const { Name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
      res.json({ message: "invalid email or password" });
    } else {
      const data = await signupModel.create({
        Name: Name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
      res.send(`<head>
      <style> 
        h3 {
          margin: 80px;
          color: green;
          font-size: 36px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
        }
        
        a {
          display: block;
          margin-top: 40px;
          text-align: center;
          color: blue;
          text-decoration: none;
          font-weight: bold;
          font-size: 20px;
        }
        
        a:hover {
          color: red;
        }
      </style>
    </head>
    <h3>Successfully signed up</h3>
    <form>
      <a href="http://localhost:3000/login">Redirect to sign in</a>
    </form>`);
    }
  } catch (err) {
    console.log(err);
  }
};
