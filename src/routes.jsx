import App from "./App";
import HomePage from "./components/Homepage/Homepage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";
import Details from "./components/DetailsPage/Details";
import Cart from "./components/Cart/Cart";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <HomePage />},
            {path: "shop", element: <ShoppingPage/>},
            {path: "details", element: <Details />},
            {path: "cart", element: <Cart />}
        ]
    },
]

export default routes;