let currentObserver = null;

export const observe = (observer) => {
    currentObserver = observer;
    observer();
    currentObserver = null;
};

export const observable = (obj) => {
    Object.keys(obj).forEach((key) => {
        let _value = obj[key];
        const observers = new Set();
        Object.defineProperty(obj, key, {
            get() {
                if (currentObserver) observers.add(currentObserver);
                return _value;
            },
            set(value) {
                _value = value;
                console.log(value, observers);
                observers.forEach((fn) => fn());
            },
        });
    });
    return obj;
};
