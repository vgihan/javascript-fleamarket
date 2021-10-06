export default pipe =
    (...fns) =>
    (args) =>
        fns.reduce((pre, fn) => {
            return fn(pre);
        }, args);
