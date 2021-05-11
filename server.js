import connectDB from './backend/config/db.js'
import userRoutes from './backend/routes/userRoute.js'
import express from 'express'
import dotenv  from 'dotenv'

console.log("Welcome, " + process.argv[2]);

var databaseName = process.argv[2];
var un = process.argv[3];
var pwd = process.argv[4]

//connect database
connectDB(databaseName, un, pwd)

//dotenv config
dotenv.config()

const app = express()

//Creating API for user
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
