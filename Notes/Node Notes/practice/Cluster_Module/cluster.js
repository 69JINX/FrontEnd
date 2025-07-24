const cluter = require("cluster");

if(cluter.isMaster) console.log(`Master process ${process.pid} is running`);
else console.log(`Worker ${process.pid} started`);
