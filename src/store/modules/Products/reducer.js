import echodot from "./../../../img/echodot.jpg";
import iphone from "./../../../img/iphone.png";
import kindle from "./../../../img/kindle.jpg";
import macbook from "./../../../img/macbook.jpg";

const allProducts = [
	{id: 1, name: "Echo Dot", price: 279.00, image: echodot},
	{id: 2, name: "Kindle Paperwhite", price: 499.00, image: kindle},
    {id: 3, name: "iPhone 12s Pro Max", price: 7000.00, image: iphone },
    {id: 4, name: "MacBook Pro 2020", price: 9000.00, image: macbook },
]

const ProductsReducer = ( state = allProducts, action ) => {
    return state;
}

export default ProductsReducer;


