const express = require('express');
const router = require('./routers/uer.router');
const app = express();

require('./config/db');

app.use(express.urlencoded({extended: true}));
app.use(express.json());





app.use('/api/users', router);





app.get('/',(req,res)=>{
    res.status(202);
    res.sendFile(__dirname + "/views/index.html");
})

app.use((req,res,next)=>{
    res.status(404);
    res.sendFile(__dirname + "/views/error.html");
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "something is broken"
    })
})




module.exports = app;