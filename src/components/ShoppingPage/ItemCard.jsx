import { Link, useNavigate } from 'react-router-dom'
import styles from './ShoppingPage.module.css'
import { useState } from 'react';

const ItemCard = ({item, addToCart}) => {
    const [numberOfItems, setNumberOfItems] = useState(1);
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/details", {state: item})
    }

    return (
        <div className={styles.card}>
            <div className={styles.titleContainer} onClick={() => handleClick()}>
                <h4>{item.title}</h4>
            </div>
            <img src={item.image} alt="" onClick={() => handleClick()}/>
            <div className={styles.bottomInfo}>
                <div>${item.price}</div>
                <div><span>★</span>{item.rating.rate}</div>
            </div>
            <div className={styles.formfield}>
                <div className={styles.inputContainer}>
                    <button onClick={() => setNumberOfItems(numberOfItems == 1 ? 1 : numberOfItems - 1)}>⇩</button>
                    <input  type="number" 
                            value={numberOfItems} 
                            onChange={(e) => setNumberOfItems(e.target.value)}
                            min="1"
                            max="50"/>
                    <button onClick={() => setNumberOfItems(numberOfItems + 1)}>⇧</button>
                </div>
                <button type="button" onClick={() => addToCart({...item, numberOfItems: numberOfItems})}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCard