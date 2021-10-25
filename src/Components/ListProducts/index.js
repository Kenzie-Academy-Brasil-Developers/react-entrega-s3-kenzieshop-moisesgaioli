import { useSelector } from "react-redux"
import Product from "../Product";


const Products = () => {
    
    const products = useSelector(store => store.products);

    return (
        <div>
            {
                products.map(item => <Product key={item.id} item={item} /> )
            }
        </div>
    )

}

export default Products