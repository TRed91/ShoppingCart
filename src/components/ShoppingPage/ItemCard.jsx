import { Link, useNavigate } from 'react-router-dom'
import styles from './ShoppingPage.module.css'
import { useState } from 'react';
import cartIcon from '../../assets/icons/cart-plus-svgrepo-com.svg'

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
                <div>${item.price.toFixed(2)}</div>
                <div><span>★</span>{item.rating.rate}</div>
            </div>
            <div className={styles.formfield}>
                <div className={styles.inputContainer}>
                    <button onClick={() => setNumberOfItems(numberOfItems == 1 ? 1 : numberOfItems - 1)}
                            className={styles.arrowButton}>⇩</button>
                    <input  type="number" 
                            value={numberOfItems} 
                            onChange={(e) => setNumberOfItems(e.target.value)}
                            min="1"
                            max="50"
                            className={styles.numberInput}/>
                    <button onClick={() => setNumberOfItems(parseInt(numberOfItems) + 1)}
                            className={styles.arrowButton}>⇧</button>
                </div>
                <button type="button" 
                        onClick={() => addToCart(item, numberOfItems)}
                        className={styles.addToCartBtn}>
                            <img src={cartIcon} alt='add to cart' className={styles.addToCartIcon}/>
                </button>
            </div>
        </div>
    )
}

export default ItemCard