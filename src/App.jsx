import { useState } from 'react'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import HomePage from './components/Homepage/Homepage'
import ShoppingPage from './components/ShoppingPage/ShoppingPage'
import { Outlet } from 'react-router-dom'

function App() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(null);

    let numberOfItems = 0;
    cart.forEach(item => numberOfItems += parseInt(item.numberOfItems))

    return (
        <>
            <Navbar itemsInCart={numberOfItems}/>
            <Outlet context={[cart, setCart, items]}/>
            <Footer />
        </>
    )
}

export default App
