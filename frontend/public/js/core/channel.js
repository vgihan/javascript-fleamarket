let curSubscriber = null;

export const registState = (obj) => {
    Object.keys(obj).forEach((key) => {
        let _value = obj[key];
        const subscribers = new Set();
        Object.defineProperty(obj, key, {
            get() {
                if (curSubscriber) subscribers.add(curSubscriber);
                return _value;
            },
            set(value) {
                _value = value;
                subscribers.forEach((f) => f());
            },
        });
    });
    return obj;
};

export const subscribe = (f) => {
    curSubscriber = f;
    f();
    curSubscriber = null;
};
