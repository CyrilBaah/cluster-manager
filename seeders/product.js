require("dotenv").config();

const Task = require("../models/product");
const connectDB = require("../config/db");
const productSeeder = require("../dataset/product.json");

const seedDB = async () => {
  try {
    await Task.deleteMany();
    await Task.create(productSeeder);
    console.log("Seeding successfull!!!");
    process.exit(1);
  } catch (error) {
    console.log(error);
  }
};

seedDB();
