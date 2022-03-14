//Library
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';


//Routes
import productRoute from "../routes/product"



// const http = require('http');
// const express = require('express');
const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api",productRoute);

//connect database
mongoose.connect('mongodb://127.0.0.1:27017/we16309')
.then(() => console.log('Connect DB Successfully!'))
.catch((error) => console.log(error))
    
//connection
const PORT = 3001; 
app.listen(PORT, () => {
    console.log("Server running in port:", PORT);
})