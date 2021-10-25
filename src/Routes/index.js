import { Route, Switch } from "react-router"
import Cart from "../Components/ListCart";
import Products from "../Components/ListProducts";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Products />
            </Route>
            <Route path="/carrinho">
                <Cart />
            </Route>
        </Switch>
    )
}

export default Routes;