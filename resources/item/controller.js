const Service = require("./item_service");
const models = require("../../models");
const service = new Service(models);
const { requestValidation } = require("../requestValidation");

async function get(req, res) {
    const validCons = [
        "iid",
        "user_uid",
        "title",
        "price",
        "contents",
        "locate",
        "category",
        "state",
    ];
    const validation = requestValidation(
        [
            Object.keys(req.query).filter((param) => !validCons.includes(param))
                .length <= 0,
        ],
        res
    );
    if (!validation) return;
    res.json(await service.findItem(req.query));
}
async function post(req, res) {
    const { user_uid, title, price, contents, locate, category } = req.body;
    const validation = requestValidation(
        [
            user_uid.length < 20,
            title.length < 25,
            price < Number.MAX_VALUE,
            contents.length < 50,
            locate.length < 15,
            category.length < 8,
        ],
        res
    );
    if (!validation) return;
    res.json(
        await service.registItem({
            user_uid,
            title,
            price,
            contents,
            locate,
            category,
        })
    );
}

module.exports = { get, post };
