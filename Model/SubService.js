const mongoose = require("mongoose");

const subservice = mongoose.Schema({
  name: {
    type: String,
  },
  parentService: {
    type: String,
  },
  category:{
    type: Array
  }
});

module.exports = mongoose.model("subservice", subservice);
