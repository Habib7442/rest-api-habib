const mongoose = require('mongoose');

uri = "mongodb+srv://habibTanwir:tbVjECZrRBq5LWdL@cluster0.als4g2f.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)
const connectDB = () => {
    console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;