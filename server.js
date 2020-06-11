let express = require("express");
var cors = require("cors");
let app = express();
const bodyParser = require("body-parser");
require("dotenv").load;
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

let routes = require("./api/routers"); //importing route
routes(app);

app.use(function (req, res) {
	res.status(404).send({ url: req.originalUrl + " not found" });
});

//app.listen(port);
app.listen(process.env.PORT || 8080, function () {
	console.log(
		"Express server listening on port %d in %s mode",
		this.address().port,
		app.settings.env
	);
});

//console.log("RESTful API server started on: " + port);
