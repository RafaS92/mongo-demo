const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("coneccted to mongodb"))
  .catch((err) => console.error("cold not coneccte", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongosse.model("Course", courseSchema);
const course = new Course({
  name: "Node.js Course",
  author: "Mosh",
  tags: ["node", "backend"],
  isPublished: true,
});
