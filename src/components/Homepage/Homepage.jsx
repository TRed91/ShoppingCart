import styles from './Homepage.module.css'
import imageOne from '../../assets/images/pexels-bohlemedia-1884579.jpg'
import imageTwo from '../../assets/images/pexels-jakubzerdzicki-18121136.jpg'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imagesContainer}>
                <img src={imageOne} className={styles.imageOne} alt="clothes on a shelf" />
                <img src={imageTwo} className={styles.imageTwo} alt="various electronics products" />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.heroText}><span className={styles.storeName}>Tomi's</span> Shop</h1>
                <p className={styles.slogan}>If we don't have it. Nobody does.</p>
            </div>
        </div>
    )
}

export default HomePage;