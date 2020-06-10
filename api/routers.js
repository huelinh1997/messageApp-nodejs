"use strict";
module.exports = function (app) {
	let messageCtrl = require("./controllers/MessageControllers");

	// todoList Routes
	app.route("/message").get(messageCtrl.get).post(messageCtrl.store);

	app
		.route("/message/:messageId")
		.get(messageCtrl.detail)
		.put(messageCtrl.update)
		.delete(messageCtrl.delete);

	app.route("/search").get(messageCtrl.search);
};
