const handleRoutes = (req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Assignment server</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Hello from node js, welcome to my assignment page</h1>");
    res.write(
      "<form method='post' action='/create-user'><input type='text' id='username' name='username' placeholder='enter username' /><button type='submit'>submit</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
  } else if (url === "/users") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Assignment users</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Users page</h1>");
    res.write("<ol><li>josh</li><li>john</li><li>joe</li></ol>");
    res.write("</body>");
    res.write("</html>");
  } else if (url === "/create-user") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Assignment create user route</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>This is the create user page</h1>");
    res.write("</body>");
    res.write("</html>");
    console.log(req);
  }
};

module.exports = handleRoutes;
