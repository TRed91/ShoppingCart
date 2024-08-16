import styles from './Navbar.module.css'

const Navbar = ({itemCount = 0}) => {
    return (
        <div className={styles.header}>
        <div className={styles.linkContainer}>
                <h1 className={styles.hero}>SHOP EPIC</h1>
            </div>
        <nav className={styles.navbar}>
            <div className={styles.linkContainer}>
                <a className={styles.navLinks} href="">Home</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.navLinks} href="">Shop</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.navLinks} href="">Cart</a>
                <div className={styles.counter}>
                    <span>{itemCount}</span>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar