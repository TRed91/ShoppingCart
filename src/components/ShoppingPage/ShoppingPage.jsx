import styles from './ShoppingPage.module.css'
import { useEffect, useState } from 'react'

const ItemCard = ({id, title, price, rating, imageUrl}) => {
    console.log(title)
    return (
        <div className={styles.card}>
            <div className={styles.titleContainer}>
                <h4>{title}</h4>
            </div>
            <img src={imageUrl} alt="" />
            <div className={styles.bottomInfo}>
                <div>${price}</div>
                <div><span>★</span>{rating.rate}</div>
            </div>
            <div className={styles.formfield}>
                <input type="number" name="" id=""/>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

const ShoppingPage = () => {
    const [items, setItems] = useState(null);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(resolve => resolve.json())
            .then(data => {
                console.log(data);
                setIsFetched(true);
                setItems(data);
            })
            .catch(err => console.log(err));
    },[])

    return (
        <div className={styles.container}>
            {!isFetched && <div className={styles.wait}><h2>Please wait...</h2></div>}
            {isFetched && items.map((item) => {
                return (
                <ItemCard   key={item.id}
                            id={item.id}
                            title={item.title} 
                            price={item.price} 
                            rating={item.rating} 
                            imageUrl={item.image}/>
                        )
            })}
        </div>
    )
}

export default ShoppingPage