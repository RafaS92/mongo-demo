const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("coneccted to mongodb"))
  .catch((err) => console.error("cold not coneccte", err));
