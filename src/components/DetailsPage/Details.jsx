import React, { useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./Details.module.css";
import addCartIcon from "../../assets/icons/cart-plus-svgrepo-com.svg"

const Details = () => {
    const {state} = useLocation();
    const [numberOfItems, setNumberOfItems] = useState(1);
    const [cart, setCart] = useOutletContext();

    const handleAddToCart = () => {
        const newCart = [...cart]
        let isInCart = false;

        newCart.forEach(e => {
            if (e.id === state.id){
                isInCart = true;
                e.numberOfItems += numberOfItems;
                setCart(newCart);
            }
        });

        if (!isInCart)
            setCart([...cart, {...state, numberOfItems: numberOfItems}])
    }
    
    return (
        <div className={styles.detailsBody}>
            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <h2 className={styles.title}>{state.title}</h2>
                    <img src={state.image} alt="" className={styles.image}/>
                    <div className={styles.bottomInfo}>
                        <h3>${state.price}</h3>
                        <h4>★{state.rating.rate} <span>{state.rating.count} ratings</span></h4>
                    </div>    
                </div>
                <p className={styles.description}>{state.description}</p>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputAndButtons}>
                    <button onClick={() => setNumberOfItems(numberOfItems == 1 ? 1 : numberOfItems - 1)}
                            className={styles.arrowButton}>⇩</button>
                    <input  type="number" 
                            value={numberOfItems} 
                            onChange={(e) => setNumberOfItems(e.target.value)}
                            className={styles.numberInput}
                            min="1"/>
                    <button onClick={() => setNumberOfItems(parseInt(numberOfItems) + 1)}
                            className={styles.arrowButton}>⇧</button>
                </div>
                <button type="button" 
                        onClick={() => handleAddToCart()}
                        className={styles.addToCartBtn}>
                    <span><img src={addCartIcon} className={styles.addCartIcon} alt="" /></span>Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Details