const http = require("http"); // importuojame http i musu koda

http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    console.log("method ===", method);
    console.log("url ===", url);
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body ===", body);
      });
  })
  .listen(8080); // Activates this server, listening on port 8080.

  const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})