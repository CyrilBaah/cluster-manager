const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const taskRoute = require("./routes/task");
const res = require("express/lib/response");

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

app.use(taskRoute);

app.get('/', (req, res) => {
  res.json({message: "Cluster API is online"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
