const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // If needed for CORS

const app = express();



//app.use(cookieParser());

app.get('/',(req,res)=>{
  res.send('Welcome');
});

app.post('/api/receive-cookie', (req, res) => {
    // Access cookies via req.cookies
    console.log('header cookies >>>',req.headers.cookie);
    console.log('Cookies:', req.cookies);
    res.json(req.cookies);
});

app.listen(8000, () => {
    console.log('Backend server listening on port 8000');
});
