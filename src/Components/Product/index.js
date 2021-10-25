import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/Cart/action";
import { MdDeleteForever } from "react-icons/md"
import "./styles.css"

const Product = ({ item, inCart }) => {

    const dispatch = useDispatch();
    
    const handleAdd = () => {
        dispatch(addToCart(item))
    }
    
    const handleRemove = () => {
        dispatch(removeFromCart(item.id))
    }
    
    return (
        <div className="product">
            <h2 className="product-name"> {item.name} </h2>
            <img className="product-image" src={item.image} alt={item.name} />
            <p className="product-price"> R$ {item.price} </p>
            {
               inCart ? <MdDeleteForever className="product-remove" onClick={handleRemove} /> :  <button className="product-button" onClick={handleAdd} > Comprar </button> 
            }
        </div> 

    )
}

export default Product;