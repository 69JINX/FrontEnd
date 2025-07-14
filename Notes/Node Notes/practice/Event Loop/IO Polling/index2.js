const fs = require("fs");

console.time("read");
fs.readFile("/home/v2r/Documents/avinashnowawave/Practice/DFGDFG.zip", (err,data) => {
  console.timeEnd("read");
      console.log(err);
    console.log(data);
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
