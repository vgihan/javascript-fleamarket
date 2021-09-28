const Service = require("./chat_service");
const models = require("../../models");
const service = new Service(models);

function get(req, res) {}
async function post(req, res) {
    const { item_iid, sender, recver, contents } = req.body;
    res.json(await service.registChat({ item_iid, sender, recver, contents }));
}

module.exports = { get, post };
