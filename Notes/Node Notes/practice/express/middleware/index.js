const express = require('express');
const app = express();


const middleware = (req,res,next)=>{
 next();
}


app.get('/',middleware,(req,res)=>{
  res.send('Home Page');
});

app.listen(4000,()=>{
  console.log('Server is running on 4000');
})
