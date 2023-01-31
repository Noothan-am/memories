import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./Routes/upload.js";
 
const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use('/post',router);

const MONGO_URL = 'mongodb+srv://noothan:noothanam@cluster0.4leqjky.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4000;

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL)
.then(()=>{
    app.listen(PORT,(req,res)=>{
       console.log(`Listening to port no ${PORT}`);
    }
)})
.catch(e =>{
    console.log(e.message);
})
