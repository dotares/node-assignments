require("dotenv").config();
const http = require("http");
const port = 3000;
const handleRoutes = require("./routes");

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});
