export const lookupItem = async (iid) => {
    return await fetch("/item", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            iid,
            mode: 1,
            num: 1,
        }),
    });
};
