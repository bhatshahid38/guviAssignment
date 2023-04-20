const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = Schema({
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },

  mobile: { type: Number, required: true },
});

module.exports = mongoose.model("user", userSchema);
