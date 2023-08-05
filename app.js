require("dotenv").config();
const http = require("http");
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Assignment server</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Hello from node js, welcome to my assignment page</h1>");
    res.write("</body>");
    res.write("</html>");
  }
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
