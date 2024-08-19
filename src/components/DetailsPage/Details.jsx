import React, { useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./Details.module.css";

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
                <h2>{state.title}</h2>
                <img src={state.image} alt="" className={styles.image}/>
                <p>{state.description}</p>
                <div className={styles.bottomInfo}>
                    <h3>${state.price}</h3>
                    <h4>★{state.rating.rate} <span>{state.rating.count} ratings</span></h4>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputAndButtons}>
                    <button onClick={() => setNumberOfItems(numberOfItems == 1 ? 1 : numberOfItems - 1)}>⇩</button>
                    <input  type="number" 
                            value={numberOfItems} 
                            onChange={(e) => setNumberOfItems(e.target.value)}
                            min="1"
                            max="50"/>
                    <button onClick={() => setNumberOfItems(numberOfItems + 1)}>⇧</button>
                </div>
                <button type="button" 
                        onClick={() => handleAddToCart()}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Details