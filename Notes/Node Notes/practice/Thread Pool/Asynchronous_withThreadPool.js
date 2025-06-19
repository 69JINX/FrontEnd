const crypto = require("crypto");

const start = Date.now();

const asyncCalc = () => {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512",()=>{
  console.log("Took", Date.now() - start, "milliseconds to calculate");  
  });
}

asyncCalc();
asyncCalc();
asyncCalc();
