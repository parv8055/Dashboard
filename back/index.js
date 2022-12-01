import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

import courseRouter from './routes/courseRoutes.js'
import testRouter from './routes/testRoutes.js'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'

const app=express()

dotenv.config();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(helmet());


app.use('/tests',testRouter)
app.use('/courses',courseRouter)
app.use('/users',userRoutes)


app.use('/',(req,res)=>{
    res.send(`Can't find ${req.originalUrl} on this server!`)
})

const port = 5000

mongoose.connect('mongodb+srv://maven:maven@cluster0.wpalxo0.mongodb.net/masterpanel?retryWrites=true&w=majority')
.then(()=>app.listen(port,()=>console.log(`connected to database and listening to ${port}`)))
.catch((err) => console.log(err));