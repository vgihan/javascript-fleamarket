const Service = require("./wishlist_service");
const models = require("../../models");
const service = new Service(models);
const { requestValidation } = require("../requestValidation");

async function get(req, res) {
    const validation = requestValidation([req.query.user_uid], res);
    if (!validation) return;
    res.json(await service.findWishlist(req.query));
}
async function post(req, res) {
    const validCons = ["user_uid", "item_iid"];
    const validation = requestValidation(
        [
            Object.keys(req.body).filter((param) => !validCons.includes(param))
                .length <= 0,
            req.body.user_uid,
            req.body.item_iid,
        ],
        res
    );
    if (!validation) return;
    res.json(await service.registWishlist(req.body));
}

module.exports = { get, post };
