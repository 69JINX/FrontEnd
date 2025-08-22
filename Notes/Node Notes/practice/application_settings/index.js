const express = require('express');
const app = express();
const router = require('./controller');

app.set('port',3000);

app.get('/home',(req,res)=>{
 res.send('welcome to home page');
});

app.listen(3000,()=>{
 console.log('server is running at 3000');
});

app.use('/users',router);

