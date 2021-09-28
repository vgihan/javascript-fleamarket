const Service = require("./chat_service");
const models = require("../../models");
const service = new Service(models);
const { requestValidation } = require("../requestValidation");

async function get(req, res) {
    const validCons = ["item_iid", "sender", "recver"];
    const validation = requestValidation(
        [
            Object.keys(req.query).filter((param) => !validCons.includes(param))
                .length <= 0,
        ],
        res
    );
    if (!validation) return;
    res.json(await service.findChat(req.query));
}
async function post(req, res) {
    const { item_iid, sender, recver, contents } = req.body;
    res.json(await service.registChat({ item_iid, sender, recver, contents }));
}

module.exports = { get, post };
