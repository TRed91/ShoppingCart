import { useState } from 'react'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import HomePage from './components/Homepage/Homepage'
import ShoppingPage from './components/ShoppingPage/ShoppingPage'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <Navbar />
            < Outlet/>
            <Footer />
        </>
    )
}

export default App
