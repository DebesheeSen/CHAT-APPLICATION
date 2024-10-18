import  express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

//middlewares
app.use(express.json());//to parse the incoming requests with JSON payloads
app.use("/api/auth/",authRoutes);

//routes
app.get("/",(req,res)=>{
    //root route http://localhost:5000/
    res.send("Hello World!");
});

