import { useOutletContext } from "react-router-dom";
import styles from './Cart.module.css'

const Cart = () => {
    const [cart, setCart, items] = useOutletContext();
    console.log(cart);
    return (
        <div className={styles.cartContainer}>
            <div className={styles.itemList}>
                {}
            </div>
            <div className={styles.checkoutCotainer}>

            </div>
        </div>
    )
}

export default Cart;