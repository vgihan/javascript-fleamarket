const Service = require("./item_service");
const models = require("../../models");
const service = new Service(models);

function get(req, res) {}
async function post(req, res) {
    const { user_uid, title, price, contents, locate, category } = req.body;
    requestValidation([
        user_uid.length < 20,
        title.length < 25,
        price < Number.MAX_VALUE,
        contents.length < 50,
        locate.length < 15,
        category.length < 8,
    ]);
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
function requestValidation(conditions) {
    conditions.forEach((condition) => {
        if (!condition) res.status(400);
    });
}

module.exports = { get, post };
