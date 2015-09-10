var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("../angularjs"));
app.listen(5000);
console.log("Server running on port:5000");