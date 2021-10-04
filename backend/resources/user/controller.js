const Service = require("./user_service");
const models = require("../../models");
const service = new Service(models);

async function get(req, res) {
    try {
        const users = await service.getUser({ user_id: req.query.user_id });
        res.json({
            isLogined: req.query.is_logined ? true : false,
            users,
        });
    } catch (error) {
        res.status(400).json({ message: "Bad Request" });
    }
}

module.exports = { get };
