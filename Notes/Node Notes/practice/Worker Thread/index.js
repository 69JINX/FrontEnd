const express = require('express');
const app = express();
const { Worker } = require('worker_threads');

app.get('/',(req,res)=>{
  res.end("Home Page");
});

app.get('/slow-page',(req,res)=>{
  const worker = new Worker('./worker-thread.js'); // creating new worker thread
  worker.on('message',(j)=>{  // listening to messages from worker thread using message event
    res.end("Slow Page " + j);
  });
});

app.listen(4000,()=>{
  console.log('Server is running at port 4000');
})
