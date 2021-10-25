import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/Cart/action";

const Product = ({ item }) => {

    const [inCart, setInCart] = useState(false)

    const dispatch = useDispatch();
    
    const handleAdd = () => {
        dispatch(addToCart([item]))
    }
    
    return (
        <div>
            <h2> {item.name} </h2>
            <img src={item.image} alt={item.name} />
            <p> $ {item.price} </p>
            <button onClick={handleAdd} > Comprar </button>
            {/* {inCart && <button onClick={() => dispatch(removeFromCart(item.id))} > Remover </button> } */}
        </div> 

    )
}

export default Product;