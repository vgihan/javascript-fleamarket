export function makeQuery(obj) {
    return Object.keys(obj)
        .reduce((pre, key) => {
            if (!obj[key]) return pre;
            pre.push(`${key}=${obj[key]}`);
            return pre;
        }, [])
        .join("&");
}
