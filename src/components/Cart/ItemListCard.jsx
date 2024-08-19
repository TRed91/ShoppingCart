import styles from './Cart.module.css';
import { useEffect, useState } from 'react';
import removeIcon from '../../assets/icons/cart-xmark-svgrepo-com.svg'

const ItemListCart = ({details, update, remove}) => {
    const [numberOfItems, setNumberOfItems] = useState(details.numberOfItems);

    useEffect(() => {
        update({...details, numberOfItems: numberOfItems});
    }, [numberOfItems])

    return (
        <div className={styles.itemcardContainer}>
            <img src={details.image} alt="product-image" className={styles.image}/>
            <div className={styles.detailsContainer}>
                <h3>{details.title}</h3>
                <div className={styles.price}>${details.price}</div>
            </div>
            <div className={styles.editContainer}>
                    <label>Items in cart: </label>
                    <div className={styles.inputContainer}>
                        <button onClick={() => {
                            setNumberOfItems(numberOfItems == 1 ? 1 : numberOfItems - 1)
                            }}
                                className={styles.arrowButton}>⇩</button>
                        <input  type="number" 
                                value={numberOfItems} 
                                onChange={e => setNumberOfItems(e.target.value)} 
                                min="1"/>
                        <button onClick={() => setNumberOfItems(parseInt(numberOfItems) + 1)}
                                className={styles.arrowButton}>⇧</button>
                    </div>
                    <button onClick={() => remove(details.id)}
                            className={styles.deleteBtn}><img src={removeIcon} alt="delet item button"
                                                            className={styles.deleteIcon} /></button>
                </div>
        </div>
    )
}

export default ItemListCart