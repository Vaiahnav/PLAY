// require("dotenv").config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
    .then(() => {
        const server = app.listen(process.env.PORT || 5000 , () => {
            console.log(`server is running at port ${process.env.PORT}`);
        })

        server.on("error", (error) =>{
            console.log("server error : ", error)
        })
    })
    .catch((err) => {
        console.log("MONGODB connection  failed", err)
        throw err
    })








// import express from "express"
// const app = express();

// (async () => {

//     try {
//         await mongoose.connect(`${process.env.
//             MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log(error);
//             throw error;
//         })


//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on post ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR", error)
//         throw error;
//     }
// })()