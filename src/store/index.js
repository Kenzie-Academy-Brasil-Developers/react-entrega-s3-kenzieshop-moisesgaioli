import { combineReducers, createStore } from "redux";
import CartReducer from "./modules/Cart/reducer";
import ProductsReducer from "./modules/Products/reducer";


const reducer = combineReducers({ 
        cart: CartReducer,
        products: ProductsReducer 
});

const store = createStore(reducer)

export default store;