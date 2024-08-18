import styles from './Cart.module.css';
import { useState } from 'react';

const ItemListCart = ({details, update, remove}) => {
    const [numberOfItems, setNumberOfItems] = useState(details.numberOfItems);

    const handleChange = (event) => {
        update({...details, numberOfItems: event.target.value});
        setNumberOfItems(event.target.value);
    }

    return (
        <div className={styles.itemcardContainer}>
            <img src={details.image} alt="product-image" className={styles.image}/>
            <div className={styles.detailsContainer}>
                <h3>{details.title}</h3>
                <div>${details.price}</div>
                <div>★{details.rating.rate}</div>
                <label>Items in cart: </label>
                <input  type="number" 
                        value={numberOfItems} 
                        onChange={e => handleChange(e)} 
                        min="1"
                        max="50"/>
                <button onClick={() => remove(details.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ItemListCart