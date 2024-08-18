import { useState } from 'react'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
    const [cart, setCart] = useState([]);

    let numberOfItems = 0;
    cart.forEach(item => numberOfItems += parseInt(item.numberOfItems))

    return (
        <>
            <Navbar itemsInCart={numberOfItems}/>
            <Outlet context={[cart, setCart]}/>
            <Footer />
        </>
    )
}

export default App
