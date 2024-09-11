import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost/tasklistdb');
        console.log("Successful connection to the DB")
    } catch (error) {
        console.log(error);
    }
};
