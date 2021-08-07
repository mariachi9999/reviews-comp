import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Review.module.css";
import logo from "../assets/logo.jpg";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import alertIcon from "../assets/alert-icon.jpg";

function Reviews() {

  const [review, setReview] = useState({
    experience: 0,
    payment: 0,
    customer: 0,
    comment: "",
  });

  const changeRating = (newRating, name) => {
    console.log(review)
    if (name === "experience") {
      setReview({ ...review, experience: newRating });
    } else if (name === "payment") {
      setReview({ ...review, payment: newRating });
    } else if (name === "customer") {
      setReview({ ...review, customer: newRating });
    } else if (name === "comment") {
      setReview({ ...review, comment: newRating });
    }
  };
  
  let history = useHistory()
  
  const alert = () => {
    Swal.fire({
      html:
        "<p>Thank you for your message!</p>" +
        "<p>We will be in contact soon.</p>",
      imageUrl: alertIcon,
      imageWidth: 76,
      imageHeight: 112,
      confirmButtonText: "CLOSE",
      confirmButtonColor: "#11C4B0",
      buttonsStyling: false,
      confirmButtonClass: `${styles.sendButton}`,
      didClose: ()=>history.push('/')
    });
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(review)
    alert()
  }

  return (
    <div id={styles.container}>
      <div id={styles.title}>
        <Link to="/" id={styles.logoContainer}>
          <img src={logo} alt="logo" id={styles.logo}></img>
        </Link>
      </div>
      <hr></hr>
      <div>
        <h2 id={styles.feedback}>Leave a feedback!</h2>
      </div>
      <form onSubmit={event=>handleSubmit(event)}>
        <div className={styles.reviewType}>
          <p className={styles.subtitles}>
            Rate your experience from 0 to 5 stars:
          </p>
          <div className={styles.starsRating}>
            <StarRatings
              rating={review.experience}
              starRatedColor="#11C4B0"
              starHoverColor="#11C4B0"
              changeRating={changeRating}
              numberOfStars={5}
              name="experience"
            />
          </div>
          <hr className={styles.divLine}></hr>
        </div>
        <div className={styles.reviewType}>
          <p className={styles.subtitles}>
            How satisfied are you with the payment process?
          </p>
          <div className={styles.starsRating}>
            <StarRatings
              rating={review.payment}
              starRatedColor="#11C4B0"
              starHoverColor="#11C4B0"
              changeRating={changeRating}
              numberOfStars={5}
              name="payment"
            />
          </div>
          <hr className={styles.divLine}></hr>
        </div>
        <div className={styles.reviewType}>
          <p className={styles.subtitles}>
            How satisfied are you with our customer service?
          </p>
          <div className={styles.starsRating}>
            <StarRatings
              rating={review.customer}
              starRatedColor="#11C4B0"
              starHoverColor="#11C4B0"
              changeRating={changeRating}
              numberOfStars={5}
              name="customer"
            />
          </div>
          <hr className={styles.divLine}></hr>
        </div>
        <div className={styles.reviewType}>
          <p className={styles.subtitles}>
            Please leave a comment about your experience below:
          </p>
          <textarea
            name="comment"
            rows="10"
            cols="50"
            className={styles.textarea}
            placeholder="Type your comment here..."
            value={review.comment}
            onChange={event=>changeRating(event.target.value, event.target.name)}
          ></textarea>
          <button type='submit' className={styles.sendButton}>
            Send feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reviews;
