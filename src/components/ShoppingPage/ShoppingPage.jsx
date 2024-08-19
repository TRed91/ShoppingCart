import { Link, useOutletContext } from 'react-router-dom'
import styles from './ShoppingPage.module.css'
import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

const ShoppingPage = () => {
    const [items, setItems] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [cart, setCart] = useOutletContext();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(resolve => resolve.json())
            .then(data => {
                setIsFetched(true);
                setItems(data);
            })
            .catch(err => console.log(err));
    },[])

    const addToCartHandler = (item, numberOfItems) => {
        let isInCart = false;
        const newCart = [...cart]
        newCart.forEach(e => {
            if (e.id === item.id)
            {
                e.numberOfItems += numberOfItems
                isInCart = true;
                setCart(newCart);
            }
        });
        if (!isInCart)
            setCart([...cart, {...item, numberOfItems: numberOfItems}])
    }

    return (
        <div className={styles.container}>
            {!isFetched && <div className={styles.wait}><h2>Please wait...</h2></div>}
            {isFetched && items.map((item) => {
                return (
                <ItemCard   key={item.id}
                            item={item}
                            addToCart={addToCartHandler}/> 
                )
            })}
        </div>
    )
}

export default ShoppingPage