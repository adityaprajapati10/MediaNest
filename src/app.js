import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
const app = express()

app.use(cors({
    origin: process.env.CROS_ORIGIN,
    Credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) // We want to use the assets stored in the public folder
app.use(cookieParser())


// ROUTES
import userRouter from './routes/user.routes.js'



// ROUTES Declaration
app.use("/api/v1/users", userRouter)


// http://localhost:8000/api/v1/users/register

export { app }