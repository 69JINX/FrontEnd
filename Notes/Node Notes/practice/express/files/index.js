const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.get('/view-pdf',(req,res)=>{
  res.sendFile(process.cwd() + '/sample.pdf');
});

app.get('/download-pdf',(req,res)=>{
  res.download(process.cwd() + '/sample.pdf','Testing.pdf');
});

app.get('/',(req,res)=>{
  res.send('Home Page');
});

app.get('/video', (req, res) => {

  const videoPath = path.join(__dirname, 'video.mp4');

  fs.stat(videoPath, (err, stats) => {
    if (err) {
      console.error('Error getting video stats:', err);
      res.writeHead(500);
      res.end('Internal Server Error');
      return;
    }

    const fileSize = stats.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      const chunkSize = (end - start) + 1;
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(206, head); // 206 Partial Content
      const videoStream = fs.createReadStream(videoPath, {
        start,
        end
      });
      videoStream.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head); // 200 OK for full content
      fs.createReadStream(videoPath).pipe(res);
    }
  });

});

app.listen(4000,()=>{
  console.log('Server is running on 4000');
})
