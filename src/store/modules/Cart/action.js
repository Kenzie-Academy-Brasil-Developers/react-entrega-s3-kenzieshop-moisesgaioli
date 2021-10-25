import { cart_ADD, cart_REMOVE } from "./actionsTypes";

export const addToCart = (product) => ({
    type: cart_ADD,
    product,
})

export const removeFromCart = (id) => ({
    type: cart_REMOVE,
    id,
})