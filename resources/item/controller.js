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
    const validCons = ["user_uid", "title", "price", "contents", "category"];
    const { user_uid, title, price, contents, category } = req.body;
    const validation = requestValidation(
        [
            Object.keys(req.body).filter((param) => !validCons.includes(param))
                .length <= 0,
            user_uid.length < 20,
            title.length < 25,
            price < Number.MAX_VALUE,
            contents.length < 50,
            category.length < 8,
        ],
        res
    );
    if (!validation) return;
    res.json(await service.registItem(req.body));
}
async function put(req, res) {
    const validCons = [
        "iid",
        "user_uid",
        "title",
        "price",
        "contents",
        "category",
        "state",
    ];
    const validation = requestValidation(
        [
            Object.keys(req.body).filter((param) => !validCons.includes(param))
                .length <= 0,
            req.body.iid,
        ],
        res
    );
    if (!validation) return;
    res.json(await service.updateItem(req.body));
}
async function del(req, res) {}

module.exports = { get, post, put, del };
