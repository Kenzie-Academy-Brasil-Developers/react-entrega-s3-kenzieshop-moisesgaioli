import { useState } from "react"
import { useSelector } from "react-redux"
import Product from "../Product"
import "./styles.css"

const Cart = () => {

    const [inCart, setInCart] = useState(true)

    const cart= useSelector(store => store.cart)

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

    return (
        <div className="cart-container">
            <div className="product-container-cart">   
                {
                    cart.map(item => <Product key={item.id} item={item} inCart={inCart} />)
                }
            </div>
            <div className="price-container">
                <p className="price"> Total: R$ {totalPrice} </p>
                <button className="button-price"> Finalizar compra </button>
            </div> 
        </div>
    )
}

export default Cart