import { Link, useNavigate } from 'react-router-dom'
import styles from './ShoppingPage.module.css'
import { useState } from 'react';

const ItemCard = ({id, title, price, rating, imageUrl, description, addToCart}) => {
    const [numberOfItems, setNumberOfItems] = useState('1');
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/details", {state: {id, title, price, rating, imageUrl, description}})
    }

    return (
        <div className={styles.card}>
            <div className={styles.titleContainer} onClick={() => handleClick()}>
                <h4>{title}</h4>
            </div>
            <img src={imageUrl} alt="" onClick={() => handleClick()}/>
            <div className={styles.bottomInfo}>
                <div>${price}</div>
                <div><span>★</span>{rating.rate}</div>
            </div>
            <form className={styles.formfield}>
                <input  type="number" 
                        value={numberOfItems} 
                        onChange={(e) => setNumberOfItems(e.target.value)}
                        min="1"
                        max="50"/>
                <button type="button" onClick={() => addToCart({numberOfItems: numberOfItems, id: id})}>Add to Cart</button>
            </form>
        </div>
    )
}

export default ItemCard