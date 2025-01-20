// require('dotenv').config({path: './env'})
// we want when our app load at that time all the env variables availabe everywhere
import dotenv from "dotenv" // subtitute for above require line
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()

.then(() => {

    app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    }),

    app.listen(process.env.PORT || 8000, () =>{
        console.log(` Server is Running at PORT : ${process.env.PORT}`);
    })
})

.catch((err) => {
    console.log("MongoDB connection failed !!", err); 
})







// import express from "express"
// const app = express();
// below code for connecting to DB 
// function connectDB(){}
// connectDB()
// above code can be also define as below and industry follow the below one above two lines only of understanding
/*
(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch(error){
        console.error("ERROR: ", error);
        throw err
    }
})()
*/