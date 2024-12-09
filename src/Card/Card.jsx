import profilePic from '../assets/profile.jpeg'
import styles from './Card.module.css'

function Card(){
    return (
        <div className={styles.card}>
            <img className={styles.card_image} src={profilePic} alt="profile picture"></img>
            <h2 className={styles.card_title}>Mr. Doorless</h2>
            <p className={styles.card_text}>I am a software developer and a gamer.</p>
        </div>
    );
}

export default Card