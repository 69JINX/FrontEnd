const express = require('express');
const app = express();


const middleware = (req,res,next)=>{
 res.data = {
    data1:'data1'   
 }
 res.locals.user = 'Avinash';
 next();
}
app.use(middleware);
app.get('/test',(req,res)=>{
   console.log(res.headersSent);
   res.set('Content-Type', 'application/json');
   console.log(res.headersSent);
   res.send({ message: 'Hello' });
   console.log(res.headersSent);
});

app.get('/',(req,res)=>{
  res.data = {
    ...res.data,
    data2:'data2'
  }
  res.json(res.locals);
});

app.use((err, req, res, next) => {
  console.error('Error >>>',err.stack);
  res.status(500).send('Something broke!');
});

app.listen(4000,()=>{
  console.log('Server is running on 4000');
})
