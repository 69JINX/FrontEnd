const express = require("express");
const cluster = require("cluster");
const os = require("os");


if(cluster.isPrimary) {
  console.log(`Master process ${process.pid} is running`);

  for(let i=0;i<os.cpus().length;i++) // creating worker as there are no. of cpus corse
  {
    cluster.fork();   
  }
}
else {
  const app = express();
  
  app.get('/',(req,res)=>{
    res.end(`Worker ${process.pid} completed you request`);
  });

  console.log(`Worker ${process.pid} started`);
  
  app.listen(4000,()=>{
    console.log('Server is running at port 4000');
  })
}
