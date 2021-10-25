import { useSelector } from "react-redux"
import Product from "../Product"

const Cart = () => {

    const cart = useSelector(store => store.cart)

    console.log(cart)

    return (
        <div>   
            {
                cart.map(item => <Product key={item.id} item={item} />)
            }
        </div>
    )
}

export default Cart