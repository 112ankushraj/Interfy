import express from "express"
import connectDB from "./Configs/config.js";
import certificateRouter from "./Routes/certificateRoutes.js";
import contactRouter from "./Routes/contactRoutes.js";

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

// ✅ Add this root welcome route
app.get("/", (req, res) => {
    res.json({
      message: "👋 Welcome to the Internify backend API!",
      status: "success",
      version: "1.0.0"
    });
  });

app.use("/api/certificate/", certificateRouter);

app.use("/api/contact/", contactRouter);


app.listen(PORT , () => {
    console.log(`Server is running PORT : ${PORT}`);
    connectDB();
});