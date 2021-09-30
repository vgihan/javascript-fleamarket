const Service = require("./wishlist_service");
const models = require("../../models");
const service = new Service(models);
const { requestValidation } = require("../requestValidation");

async function get(req, res) {
    try {
        const validation = requestValidation([req.query.user_uid], res);
        if (!validation) return;
        res.json(await service.findWishlist(req.query));
    } catch (err) {
        res.status(400).json({ message: 400 });
    }
}
async function post(req, res) {
    try {
        const validCons = ["user_uid", "item_iid"];
        const validation = requestValidation(
            [
                Object.keys(req.body).filter(
                    (param) => !validCons.includes(param)
                ).length <= 0,
                req.body.user_uid,
                req.body.item_iid,
            ],
            res
        );
        if (!validation) return;
        res.json(await service.registWishlist(req.body));
    } catch (err) {
        res.status(400).json({ message: 400 });
    }
}
async function del(req, res) {
    try {
        const validCons = ["user_uid", "item_iid"];
        const validation = requestValidation(
            [
                Object.keys(req.query).filter(
                    (param) => !validCons.includes(param)
                ).length <= 0,
                req.query.user_uid,
                req.query.item_iid,
            ],
            res
        );
        if (!validation) return;
        res.json(await service.deleteWishlist(req.query));
    } catch (error) {
        res.status(400).json({ message: 400 });
    }
}

module.exports = { get, post, del };
