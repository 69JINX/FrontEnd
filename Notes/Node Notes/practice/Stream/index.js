const fs = require("node:fs");

const readableStream = fs.createReadStream("./file1.txt", {encoding: "utf-8",}); // readable stream to read data in chunks from file1.txt

const writeableStream = fs.createWriteStream("./file2.txt"); // writable stream to write data in chunks to file2.txt

readableStream.on("data", (chunk) => {
	console.log(chunk) ;
	writeableStream.write(chunk);
})

