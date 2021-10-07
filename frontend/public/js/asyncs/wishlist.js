import { makeQuery } from "../utils/make_query";

export const postWishlist = async (userId, itemId) => {
    return await fetch("/wishlist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_uid: userId,
            item_iid: itemId,
        }),
    });
};
export const deleteWishlist = async (userId, itemId) => {
    const query = makeQuery({
        user_uid: userId,
        item_iid: itemId,
    });
    return await fetch(`/wishlist?${query}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
};
