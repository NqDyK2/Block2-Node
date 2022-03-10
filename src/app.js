import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoute from "../routes/product"



// const http = require('http');
// const express = require('express');
const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use(productRoute)

// const check = (req, res, next) => {
//     const status = true;
//     if(status){
//         console.log("Cho phép truy cập");
//         next();
//     }else{
//         console.log("Nothing");
//     }
// }
// app.get('/api/products', check, (req, res)=>{
//     const products = [
//         {id: 1, name: "Products A"},
//         {id: 2, name: "Products B"}
//     ]
//     res.json(products);
// })


// const server = http.createServer((req, res) => {
//     console.log("url", req.url);
//     if(req.url === "/"){
//         res.setHeader('Content-Type', "text/html");
//         res.write('<html><body><h1>Home Page</h1></body></html>')
//         res.end();
//     }else if(req.url === "/api/products"){
//         const products = [
//             {id: 1, name: "Product A"},
//             {id: 2 , name: "Product B"}
//         ]
//         res.end(JSON.stringify(products));
//     }else{
//         console.log("....");
//     }
// });

const PORT = 3001; 
app.listen(PORT, () => {
    console.log("Server running in port:", PORT);
})