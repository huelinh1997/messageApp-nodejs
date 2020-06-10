"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("../db");

module.exports = {
	get: async (req, res) => {
		let sql = `SELECT * FROM message`;

		db.query(sql, (err, response) => {
			if (err) throw err;
			console.log("response:", response);
			res.json(response);
		});
	},
	detail: (req, res) => {
		let sql = "SELECT * FROM message WHERE id = ?";
		db.query(sql, [req.params.messageId], (err, response) => {
			if (err) throw err;
			res.json(response[0]);
		});
	},
	update: (req, res) => {
		let data = req.body;
		let messageId = req.params.messageId;
		let sql = "UPDATE message SET ? WHERE id = ?";
		db.query(sql, [data, messageId], (err, response) => {
			if (err) throw err;
			res.json({
				message: "Update success!",
				data: { id: Number(messageId), ...data },
			});
		});
	},
	store: (req, res) => {
		let data = req.body;
		let sql = "INSERT INTO message SET ?";
		db.query(sql, [data], (err, response) => {
			if (err) throw err;
			res.json({
				message: "Insert success!",
				data: { id: response.insertId, ...data },
			});
		});
	},
	delete: (req, res) => {
		let sql = "DELETE FROM message WHERE id = ?";
		db.query(sql, [req.params.messageId], (err, response) => {
			if (err) throw err;
			res.json({ message: "Delete success!" });
		});
	},
	search: (req, res) => {
		let sql = `SELECT * FROM message WHERE mes LIKE N'%${req.query.search}%'`;
		db.query(sql, [req.query.search], (err, response) => {
			if (err) throw err;
			console.log("res:", response);
			res.json({ data: response });
		});
	},
};
