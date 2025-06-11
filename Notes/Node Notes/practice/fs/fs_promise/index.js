const fs = require("fs");

async function readFile(){
  try{
    const data = await fs.promises.readFile("./file.txt","utf-8")
    console.log(data);
  }
  catch(err){
    console.log(err);  
  }
}
readFile();
