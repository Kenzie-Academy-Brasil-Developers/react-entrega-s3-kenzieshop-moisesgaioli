import { cart_ADD, cart_REMOVE } from "./actionsTypes";


const CartReducer = ( state = [], action ) => {
    
    switch (action.type) {
        case cart_ADD:
            const { products } = action

            return [...state, products];
        
        case cart_REMOVE:
            const { id } = action
            const productRemove = state.filter(item => item.id !== id)

            return productRemove;
    
        default:
            return state;
    }
} 

export default CartReducer;

