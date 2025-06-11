const fs = require("fs");

console.log("First");
const fileContent = fs.readFileSync("./file.txt","utf-8") // Synchronous file read
console.log(fileContent);

console.log("Second");

fs.readFile("./file.txt","utf-8",(error,data)=>{ // Asynchronous file read. This patter os using callbacks where first argument is the error is called "error first callback pattern"
   if(error){
      console.log(error,"Error reading file");
    }
    else{
     console.log(data);
    }
});

fs.writeFile("./greet2.txt","Hello again Avinash",{flag:"a"},(err)=>{  
  if(err) return console.log(err);
  console.log("Content has been written in the greet2.txt file");
});

console.log("Third");
