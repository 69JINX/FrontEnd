const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 7;

const asyncCalc = (i) => {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512",()=>{
  console.log(`Task ${i} Took`, Date.now() - start, "milliseconds to calculate");  
  });
}

for(let i = 1; i<=7; i++){
  asyncCalc(i);
}

