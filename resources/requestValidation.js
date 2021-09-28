function requestValidation(conditions, res) {
    return conditions.reduce((pre, condition) => {
        if (!condition) {
            res.status(400).json({ message: "Bad Request" });
            pre = false;
        }
        return pre;
    }, true);
}

module.exports = { requestValidation };
