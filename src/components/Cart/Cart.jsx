import { useOutletContext } from "react-router-dom";
import styles from './Cart.module.css';
import ItemListCard from './ItemListCard'

const Cart = () => {
    const [cart, setCart] = useOutletContext();

    let itemsTotal = 0;
    const shipping = 6.99;
    const tax = 0.2;

    cart.forEach(item => {
        return itemsTotal += (item.price * parseFloat(item.numberOfItems))
    })

    const updateHandler = (data) => {
        const updateCart = [... cart];
        updateCart.forEach(item => {
            if (item.id === data.id){
                item.numberOfItems = data.numberOfItems;
            }
        })
        setCart(updateCart);
    }

    const handleRemove = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    return (
        <div className={styles.cartContainer}>
            <div className={styles.itemList}>
            {cart.map(item => {
                return <ItemListCard key={item.id} details={item} update={updateHandler} remove={handleRemove}/>
            })}
            </div>
            <div className={styles.checkoutContainer}>
                <ul className={styles.priceBreakdown}>
                    <li>Items Total:&emsp;${itemsTotal.toFixed(2)} <hr /> </li>
                    <li>Shipping:&emsp;&emsp;${shipping}<hr /></li>
                    <li>Tax:&emsp;&emsp;&emsp;&emsp;&emsp;10%</li>
                </ul>   
                <div className={styles.totalContainer}>
                    <h1>Total: ${((itemsTotal + (itemsTotal * 0.1)) + shipping).toFixed(2)}</h1>
                    <button className={styles.checkoutButton}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;