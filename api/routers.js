// "use strict";
// module.exports = function (app) {
// 	let messageCtrl = require("./controllers/MessageControllers");

// 	// todoList Routes
// 	app.route("/message").get(messageCtrl.get).post(messageCtrl.store);

// 	app
// 		.route("/message/:messageId")
// 		.get(messageCtrl.detail)
// 		.put(messageCtrl.update)
// 		.delete(messageCtrl.deleteMes);

// 	app.route("/search").get(messageCtrl.search);
// };

const express = require("express");
const router = express.Router();
const {
	get,
	store,
	detail,
	update,
	search,
	deleteMes,
} = require("./controllers/MessageControllers");
module.exports = function (router) {
	router.get("/message", get);
	router.post("/message", store);
	router.get("/search", search);
	router.get("/message/:messageId", detail);
	router.put("/message/:messageId", update);
	router.delete("/message/:messageId", deleteMes);
};
