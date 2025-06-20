const https = require("https");

const start = Date.now();

const asyncCall = (i) => {
  https.request("https://www.google.com",(res)=>{
    res.on("data",()=>{})
    res.on("end",()=>{
      console.log(`Request ${i} took ${Date.now()-start}`);
    });
  })
  .end();
}

for(let i = 1; i<=12; i++){
  asyncCall(i);
}

