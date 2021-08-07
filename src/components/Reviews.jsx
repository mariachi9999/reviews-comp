import {useState} from 'react'
import {
  Link
} from "react-router-dom";
import styles from './Review.module.css'
import logo from '../assets/logo.jpg'
import StarRatings from 'react-star-ratings';
import Swal from 'sweetalert2'
import alertIcon from '../assets/alert-icon.jpg'

function Reviews() {

    const [experience, setExperience] = useState(0)
    const [payment, setPayment] = useState(0)
    const [customer, setCustomer] = useState(0)

    const changeRating = ( newRating, name )=> {
      if(name==='experience'){
        setExperience(newRating);
      } else if (name==='payment'){
        setPayment(newRating);
      } else if (name==='customer'){
        setCustomer(newRating);
      }
    }

    const alertText = `Thank you for your message! \n
    We will be in contact soon.`
 
    const alert = ()=>{
      Swal.fire({
        html:
        '<p>Thank you for your message!</p>' +
        '<p>We will be in contact soon.</p>',
        imageUrl: alertIcon,
        confirmButtonText: 'CLOSE',
        confirmButtonColor: '#11C4B0',
        buttonsStyling: false,
        confirmButtonClass: `${styles.sendButton}`
      })
    }


  return (
    <div id={styles.container}>
      <div id={styles.title}>
        <Link to='/' id={styles.logoContainer}>
          <img src={logo} alt='logo' id={styles.logo}></img>
        </Link>
      </div>
      <hr></hr>
      <div>
        <h2 id={styles.feedback}>Leave a feedback!</h2>
      </div>
      <div className={styles.reviewType}>
        <p className={styles.subtitles}>Rate your experience from 0 to 5 stars:</p>
        <div className={styles.starsRating}>
          <StarRatings
            rating={experience}
            starRatedColor="#11C4B0"
            starHoverColor="#11C4B0"
            changeRating={changeRating}
            numberOfStars={5}
            name='experience'
          />
        </div>
        <hr className={styles.divLine}></hr>
      </div>
      <div className={styles.reviewType}>
        <p className={styles.subtitles}>How satisfied are you with the payment process?</p>
        <div className={styles.starsRating}>
          <StarRatings
            rating={payment}
            starRatedColor="#11C4B0"
            starHoverColor="#11C4B0"
            changeRating={changeRating}
            numberOfStars={5}
            name='payment'
          />
        </div>
        <hr className={styles.divLine}></hr>
      </div>
      <div className={styles.reviewType}>
        <p className={styles.subtitles}>How satisfied are you with our customer service?</p>
        <div className={styles.starsRating}>
          <StarRatings
            rating={customer}
            starRatedColor="#11C4B0"
            starHoverColor="#11C4B0"
            changeRating={changeRating}
            numberOfStars={5}
            name='customer'
          />
        </div>
        <hr className={styles.divLine}></hr>
      </div>
      <div className={styles.reviewType}>
        <p className={styles.subtitles}>Please leave a comment about your experience below:</p>
        <textarea name="textarea" rows="10" cols="50" className={styles.textarea} placeholder='Type your comment here...'></textarea>
        <button className={styles.sendButton} onClick={alert}>Send feedback</button>
      </div>
    </div>
  )
}

export default Reviews
