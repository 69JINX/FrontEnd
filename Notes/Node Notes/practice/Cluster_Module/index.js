const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.end("Home Page");
});

app.get('/slow-page',(req,res)=>{
  for(let i = 0; i<6000000000;i++){} // Simulate CPU work 
  res.end("Slow Page");
});

app.listen(4000,()=>{
  console.log('Server is running at port 4000');
})
