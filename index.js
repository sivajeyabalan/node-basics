const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/"){
    fs.readFile(path.join(__dirname,  "index.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
  else if (req.url === "/about"){
    fs.readFile(path.join(__dirname,  "about.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
  else if (req.url === "/contact"){
    fs.readFile(path.join(__dirname,  "contact-me.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
  else {
    fs.readFile(path.join(__dirname,  "404.html"), (err, content) => {
      if (err) throw err;
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(content);
    });
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
})