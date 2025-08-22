const express = require('express');
const router = express.Router();


router.get('/getUser',(req,res)=>{ 
  res.send(`server is running on port ${req.app.get('port')}`);
});

module.exports = router
