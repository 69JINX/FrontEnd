const crypto = require("crypto");

const start = Date.now();

const syncCalc = () => {
  crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
  console.log("Took", Date.now() - start, "milliseconds to calculate");
}

syncCalc();
syncCalc();
syncCalc();
