import styles from './Cart.module.css';
import { useEffect, useState } from 'react';

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
                <div>${details.price}</div>
                <div>★{details.rating.rate}</div>
                <label>Items in cart: </label>
                <div className={styles.inputContainer}>
                    <button onClick={() => {
                        setNumberOfItems(numberOfItems == 1 ? 1 : numberOfItems - 1)
                        }}>⇩</button>
                    <input  type="number" 
                            value={numberOfItems} 
                            onChange={e => setNumberOfItems(e.target.value)} 
                            min="1"
                            max="50"/>
                    <button onClick={() => setNumberOfItems(numberOfItems + 1)}>⇧</button>
                </div>
                <button onClick={() => remove(details.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ItemListCart