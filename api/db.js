"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
	host: process.env.DB_HOST || "mysql5006.site4now.net",
	user: process.env.DB_USER || "9a9cca_infolue",
	password: process.env.DB_PASSWORD || "Vbn*34295",
	database: process.env.DB_NAME || "db_9a9cca_infolue",
});

module.exports = db;
