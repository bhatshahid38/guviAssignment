const User = require("../modals/user");

module.exports.update = async (req, res) => {
  const userId = req.query.id;

  console.log(userId, ">>");
  const { age, gender, dob, mobile } = req.body;
  console.log(req.body, req.params);

  try {
    // Find the user in the database by their ID and update their information
    const updatedUser = await User.updateOne(
      { _id: userId },
      { age, gender, dob, mobile }
    );

    if (updatedUser.nModified === 0) {
      // If no user was found with the given ID, return a 404 error
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
