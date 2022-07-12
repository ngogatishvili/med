const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
require("dotenv").config();

const authRouter=require("./routes/auth")

const PORT=process.env.PORT||4000;

app.use("/auth",authRouter);

app.get("/",(req,res)=>{
    res.send("Hello world")
})



app.listen(PORT,console.log(`server running on port ${PORT}`))




