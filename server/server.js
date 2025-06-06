import express from "express"
import connectDB from "./Configs/config.js";
import certificateRoutes from "./Routes/certificateRoutes.js";

import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000 ; 

const app = express();
// app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true , 
}));



app.use("/api/certificate/", certificateRoutes);


app.listen(PORT , () => {
    console.log(`Server is running PORT : ${PORT}`);
    connectDB();
});