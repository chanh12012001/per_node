const mongoose = require("mongoose");

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
  },
  note: {
    type: String,
  },
  isCompleted: {
    type: Number,
  },
  date: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  color: {
    type: Number,
  },
  remind: {
    type: Number,
  },
  repeat: {
    type: String,
  },
  userId: {
    type: String,
  },
});

const Task = mongoose.model("tasks", TaskSchema);

module.exports = Task;