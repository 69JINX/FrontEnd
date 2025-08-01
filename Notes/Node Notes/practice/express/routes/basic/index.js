const express = require('express');
const app = express();

app.get('/users/:id/:token',(req,res)=>{
  console.log(req.params);
  res.send(req.params);
});


app.get('/api/secure-data', (req, res) => {
 try{
   const authToken = req.headers.authorization; // Access the Authorization header
   console.log('Authentication token:', authToken);
   res.status(200).json({ message: 'Secure data accessed',token:authToken });
  }
   catch(err){
   console.log(err);
  }
});

app.listen(4000,()=>{
 console.log('server is running at port 4000');
})
