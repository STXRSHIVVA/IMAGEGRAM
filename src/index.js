import express from 'express';
import connectDb from './config/dbConfig.js';

const PORT = 3000;

const app = express(); // creates express app server instance

app.get('/ping',(req,res)=>{
    return res.json({message: 'pong'});
});

app.listen(PORT, () => { // 
    console.log("Server is running on port" + PORT);
    connectDb();
});