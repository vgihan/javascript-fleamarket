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
        "locate",
    ];
    const validation = requestValidation(
        [
            Object.keys(req.query).filter((param) => !validCons.includes(param))
                .length <= 0,
        ],
        res
    );
    if (!validation) return;
    const { isLogined } = req.session;
    res.json(
        (
            await service.findItem(
                req.query,
                isLogined ? req.session.user.userId : null
            )
        )[0]
    );
}
async function post(req, res) {
    try {
        const validCons = [
            "user_uid",
            "title",
            "price",
            "contents",
            "locate",
            "category",
            "img",
        ];
        const { user_uid, title, price, contents, category } = req.body;
        const validation = requestValidation(
            [
                Object.keys(req.body).filter(
                    (param) => !validCons.includes(param)
                ).length <= 0,
                user_uid.length < 20,
                title.length < 25,
                price < Number.MAX_VALUE,
                contents.length < 50,
                category.length < 8,
            ],
            res
        );
        if (!validation) return;
        await service.registItem(req.body);
        res.status(200).redirect("/");
    } catch (err) {
        res.status(400).json({ message: "Bad request" });
    }
}
async function put(req, res) {
    try {
        if (!req.body.mode) throw new Error("no mode");
        const validCons = [
            "iid",
            "user_uid",
            "title",
            "price",
            "contents",
            "category",
            "state",
            "mode",
            "num",
        ];
        const validation = requestValidation(
            [
                Object.keys(req.body).filter(
                    (param) => !validCons.includes(param)
                ).length <= 0,
                req.body.iid,
            ],
            res
        );
        if (!validation) return;
        if (req.body.mode === 3) {
            res.json(await service.updateItem(req.body));
            return;
        }
        const target = [
            { condition: { HEART_NUM: req.body.num }, iid: req.body.iid },
            { condition: { LOOKUP_NUM: req.body.num }, iid: req.body.iid },
            { condition: { CHAT_NUM: req.body.num }, iid: req.body.iid },
        ];
        res.json(await service.updateItemNum(target[req.body.mode]));
    } catch (error) {
        console.log(error);
        res.status(400).redirect("/");
    }
}
async function del(req, res) {
    const validation = requestValidation(
        [
            Object.keys(req.query).filter((param) => param !== "iid").length <=
                0,
            req.query.iid,
        ],
        res
    );
    if (!validation) return;
    res.json(await service.deleteItem(req.query));
}

module.exports = { get, post, put, del };
