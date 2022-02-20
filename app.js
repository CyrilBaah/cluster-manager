const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

// Routes
const tasksRoute = require("./routes/tasks");
const productsRoute = require("./routes/products");
const notFoundHandler = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(tasksRoute);
app.use(productsRoute);
app.use(notFoundHandler);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: "Cluster API is online" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
