const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose
    .connect("mongodb://localhost:27017/sec1")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err)    );
};

module.exports = connectDB;