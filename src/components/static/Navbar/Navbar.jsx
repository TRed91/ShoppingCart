import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = ({itemCount = 0}) => {
    return (
        <div className={styles.header}>
            <div className={styles.linkContainer}>
                <h1 className={styles.hero}>SHOP EPIC</h1>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.linkContainer}>
                    <Link className={styles.navLinks} to="/">Home</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.navLinks} to="shop">Shop</Link>
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.navLinks} to="">Cart</Link>
                    <div className={styles.counter}>
                        <span>{itemCount}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar