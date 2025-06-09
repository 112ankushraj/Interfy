import mongoose from "mongoose";
// connection 
const connectDB = async (req , res) =>{
    try {
        const conn = await mongoose.connect("mongodb+srv://user:db_123123@webdeploy.8ctcn.mongodb.net/Internfy?retryWrites=true&w=majority&appName=webDeploy");
        console.log(`Mongodb Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}


export default connectDB ;