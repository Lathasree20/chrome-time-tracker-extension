const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TimeEntry = require("./models/TimeEntry");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/time-tracker");

app.post("/log", async (req, res) => {
  try {
    const entry = new TimeEntry(req.body);
    await entry.save();
    res.status(201).json({ message: "Logged" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/report", async (req, res) => {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const logs = await TimeEntry.find({ timestamp: { $gte: oneWeekAgo } });

  const report = { productive: 0, unproductive: 0 };
  logs.forEach(log => {
    if (log.category === "productive") report.productive += log.duration;
    else if (log.category === "unproductive") report.unproductive += log.duration;
  });

  res.json(report);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
