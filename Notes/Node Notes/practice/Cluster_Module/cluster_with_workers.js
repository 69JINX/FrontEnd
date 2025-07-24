const express = require("express");
const app = express();
const cluster = require("cluster");

if(cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
}
else {
  console.log(`Worker ${process.pid} started`);
  app.listen(4000,()=>{
    console.log('Server is running at port 4000');
  })
}
