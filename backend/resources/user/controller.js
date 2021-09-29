const Service = require("./user_service");
const models = require("../../models");
const service = new Service(models);
const { requestValidation } = require("../requestValidation");

function get(req, res) {}
async function post(req, res) {
    try {
        const validCons = ["uid", "locate"];
        const validation = requestValidation(
            [
                Object.keys(req.body).filter(
                    (param) => !validCons.includes(param)
                ).length <= 0,
                req.body.uid,
                req.body.locate,
            ],
            res
        );
        if (!validation) return;
        res.json(await service.registUser(req.body));
    } catch (error) {
        res.status(400).json({ message: 400 });
    }
}

module.exports = { get, post };
