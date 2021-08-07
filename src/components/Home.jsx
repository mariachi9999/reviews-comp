import logo from '../assets/landing.jpeg';
import styles from './Home.module.css';
import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Thanks for the oportunity and for your time, Solavieve! 🤗
        </p>
        <Link to='/reviews'>
          Go to solution page!
        </Link>
      </header>
    </div>
  );
}

export default Home;
