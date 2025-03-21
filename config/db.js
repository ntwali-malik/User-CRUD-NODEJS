const mongoose = require("mongoose")
require("dotenv").config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo Db Connected Successfully!!")
    } catch (error) {
        console.error("Mongo Db Connection Failed:",error)
        process.exit(1);
    }
};

module.exports = connectDB