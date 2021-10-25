import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/"> Produtos </Link> </li>
                    <li> <Link to="/carrinho"> Carrinho </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu