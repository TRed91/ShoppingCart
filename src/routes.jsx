import App from "./App";
import HomePage from "./components/Homepage/Homepage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <HomePage />},
            {path: "shop", element: <ShoppingPage/>},
        ]
    },
]

export default routes;