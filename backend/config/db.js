import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connect successfully");
    } catch (error) {
        console.log(`MongoDB Connection Failed Error: ,${error.message}`)
    }
}