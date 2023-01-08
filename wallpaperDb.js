require("dotenv").config();
const connectDb = require("./db/connect");
const Product = require("./models/product");

const BollywoodJson = require("./bollywood.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    await Product.create(BollywoodJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
