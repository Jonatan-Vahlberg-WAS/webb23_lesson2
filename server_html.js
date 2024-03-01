const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return fs.createReadStream("dist/index.html", "utf-8").pipe(res);
  }
  else if (req.url === "/contact" || req.url === "/contact.html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return fs.createReadStream("dist/contact.html", "utf-8").pipe(res);
  }
  else if (req.url.includes(".css")) {
    console.log("Looking for stylesheet ", req.url);
    res.writeHead(200, { "Content-Type": "text/css" });
    return fs.createReadStream(req.url.slice(1)).pipe(res)
  }
  else if (req.url.endsWith(".js")) {
    console.log("Looking for Script file", req.url)
    res.writeHead(200, { "Content-Type": "application/javascript" });
    return fs.createReadStream(req.url.slice(1)).pipe(res);
  }
  else if (req.url.includes("/images")) {
    const extensionIndex = req.url.lastIndexOf(".")
    const extension = req.url.slice(extensionIndex + 1)
    console.log(extension)
    res.writeHead(200, { "Content-Type": `image/${extension}` })
    return fs.createReadStream(req.url.slice(1)).pipe(res);
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(fs.readFileSync("dist/404.html"));
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on port ", port);
});
