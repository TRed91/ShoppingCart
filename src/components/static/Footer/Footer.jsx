import styles from './Footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.hero}>
                <h1>Shop Epic</h1>
                <p>We are a small family business but we offer best prices and guarantee fast and secure shipment!</p>
            </div>
            <div className={styles.linksContainer}>
                <div className={styles.footerSection}>
                    <h3>About us</h3>
                    <a href="">About</a>
                    <a href="">Career</a>
                </div>
                <div className={styles.footerSection}>
                    <h3>Support</h3>
                    <a href="">Contact us</a>
                    <a href="">Shipping</a>
                    <a href="">FAQ</a>
                </div>
                <div className={styles.footerSection}>
                    <h3>Legal</h3>
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;