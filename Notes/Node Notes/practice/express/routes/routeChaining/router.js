const express = require('express');
const router = express.Router();


router.get('/user/:id',(req,res)=>{
 console.log('params>>>',req.params);
  res.send(req.params);
});

module.exports = {router}
