import styles from '../css/donate.module.css'; 
import donate from '../assets/images/donate.png'
import image from '../assets/images/image.png'

const Donate = () => {
  return (
    <div className={styles.donate_container}>
      
       <div className={styles.qrCode}>
          <h2>Donate for me</h2>
          <img src={donate} alt="dit me may"/>
       </div>

       <div className={styles.image}>
        <img src={image} alt="dit me may" />
       </div>

    </div>
  )
}

export default Donate