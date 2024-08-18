import { Link, useOutletContext } from 'react-router-dom'
import styles from './ShoppingPage.module.css'
import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const ShoppingPage = () => {
    const [items, setItems] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [cart, setCart] = useOutletContext();
    const [addToCart, setAddToCart] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(resolve => resolve.json())
            .then(data => {
                setIsFetched(true);
                setItems(data);
            })
            .catch(err => console.log(err));
    },[])

    useEffect(() => {
        if(addToCart)
            setCart([...cart, addToCart])
    }, [addToCart])

    return (
        <div className={styles.container}>
            {!isFetched && <div className={styles.wait}><h2>Please wait...</h2></div>}
            {isFetched && items.map((item) => {
                return (
                <ItemCard   key={item.id}
                            item={item}
                            addToCart={setAddToCart}/> 
                )
            })}
        </div>
    )
}

export default ShoppingPage