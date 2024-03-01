const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Welcome to our webbserver!");
  }
    if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Contact us on\nName: Jonatan v\nPhone: 071234567\nEmail: email@domain.com`);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404: page is not a part of our webbserver");
});

const port = 3000;
server.listen(port, () => {
  console.log("Server is running on port ", port);
});
