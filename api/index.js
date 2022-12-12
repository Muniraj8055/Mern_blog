const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const multer = require('multer')
const cors = require("cors");

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')


//to hide mongo uri
dotenv.config()

// app.use(cors());

//to get json responses
app.use(express.json())

//routes

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories',categoryRoute)


//Database connection

mongoose .connect(process.env.mongoURI, { 
    useNewUrlParser: true 
}) .then(() => 
        console.log("MongoDB connected")
    ) 
    .catch((err) => console.log(err));

//multer storage

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"images") //folder name
    },

    filename:(req,file,callback)=>{
        callback(null,req.body.name)
    }
})

//to upload files

const upload = multer({ storage:storage})

app.post('/api/upload', upload.single('file'),(req,res)=>{
    res.status(200).json('File has been uploaded...')
})





app.listen("5000", ()=>{
    console.log('Backend is running.....')
})
