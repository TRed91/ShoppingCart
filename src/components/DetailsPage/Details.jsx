import React, { useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./Details.module.css";

const Details = () => {
    const {state} = useLocation();
    const [numberOfItems, setNumberOfItems] = useState('1');
    const [cart, setCart] = useOutletContext();
    
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
            <form className={styles.inputContainer}>
                <input  type="number" 
                        value={numberOfItems} 
                        onChange={(e) => setNumberOfItems(e.target.value)}
                        min="1"
                        max="50"/>
                <button type="button" onClick={() => setCart([...cart, {...state, numberOfItems: numberOfItems}])}>Add to Cart</button>
            </form>
        </div>
    )
}

export default Details