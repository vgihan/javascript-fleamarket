const Service = require("./user_service");
const models = require("../../models");
const service = new Service(models);

function get(req, res) {}
async function post(req, res) {
    const { uid, username } = req.body;
    res.json(await service.registUser({ uid, username }));
}

module.exports = { get, post };
