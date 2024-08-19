import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import cartIcon from '../../../assets/icons/cart-shopping-svgrepo-com.svg'

const Navbar = ({itemsInCart}) => {
    return (
        <div className={styles.header}>
            <div className={styles.linkContainer}>
                <Link to="/" className={styles.navLinks}><h1><span className={styles.hero}>Tomi's</span> Shop</h1></Link>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.linkContainer}>
                    <Link className={styles.navLinks} to="/">Home</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.navLinks} to="shop">Shop</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.navLinks} to="cart">
                        <img src={cartIcon} className={styles.cartIcon} alt="shopping cart link" />
                    </Link>
                    <div className={styles.counterContainer}>
                        <span className={styles.counter}>{itemsInCart}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar