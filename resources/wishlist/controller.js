const Service = require("./wishlist_service");
const models = require("../../models");
const service = new Service(models);
const { requestValidation } = require("../requestValidation");

async function get(req, res) {}
async function post(req, res) {}

module.exports = { get, post };
