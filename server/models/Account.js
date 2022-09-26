const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Accounts", accountSchema);