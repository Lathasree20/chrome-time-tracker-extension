const mongoose = require("mongoose");

const TimeEntrySchema = new mongoose.Schema({
  url: String,
  category: String,
  duration: Number,
  timestamp: String
});

module.exports = mongoose.model("TimeEntry", TimeEntrySchema);
