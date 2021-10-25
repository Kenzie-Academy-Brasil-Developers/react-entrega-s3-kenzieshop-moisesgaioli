import { Link } from "react-router-dom"
import { BsCart4 } from "react-icons/bs"
import "./styles.css"

const Menu = () => {
    return (
        <header>
            <nav>
                <ul className="menu-list">
                    <li className="menu-item"> <Link className="menu-link" to="/"> Produtos </Link> </li>
                    <li className="menu-item"> <Link className="menu-link" to="/carrinho"> <BsCart4 /> </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu