import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://sanjaypk986:<db_password>@cluster0.z20ti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database connected");
        
    } catch (error) {
        console.log(error);
        
    }
}