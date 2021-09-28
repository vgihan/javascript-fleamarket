const obj = {
    a: 1,
    b: 3,
};
const obj2 = {
    a: 2,
};

obj2["b"] = obj["c"];

console.log(obj2);
