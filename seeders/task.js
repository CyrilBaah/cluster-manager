require("dotenv").config();

const Task = require("../models/task");
const connectDB = require("../config/db");
const taskSeeder = require("../dataset/task.json");

const seedDB = async () => {
  try {
    await Task.deleteMany();
    await Task.create(taskSeeder);
    console.log("Seeding successfull!!!");
    process.exit(1);
  } catch (error) {
    console.log(error);
  }
};

seedDB();
