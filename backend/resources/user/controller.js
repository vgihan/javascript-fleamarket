const Service = require("./user_service");
const models = require("../../models");
const service = new Service(models);

async function get(req, res) {
    try {
        const users = await service.getUser({ userId: req.query.userId });
        res.json({
            isLogined: req.query.isLogined ? true : false,
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bad Request" });
    }
}

module.exports = { get };
