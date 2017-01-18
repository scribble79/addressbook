var express        = require("express");
var app            = express();
var port           = process.env.PORT || 3000;
var expressLayouts = require("express-ejs-layouts");
var morgan         = require("morgan");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var router         = require("./config/routes");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(morgan('dev'));
// You don't need to invoke this variable!
app.use(expressLayouts);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use("/", router);

app.listen(port);