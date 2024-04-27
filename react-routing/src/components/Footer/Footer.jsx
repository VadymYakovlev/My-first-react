// * Base
import { Link } from 'react-router-dom';

// * Styles
import styles from '../Footer/Footer.module.css';

const Footer = () => {
  return (
    <div>
      <div className={styles.terms}>
        By clicking the Sign Up button, you confirm that you accept our
        <Link to='/about' className={styles.link}>
          Terms of Use
        </Link>
        and
        <Link to='/' className={styles.link}>
          Privacy Policy
        </Link>
      </div>

      <footer className={styles.footer}>
        <div>
          <span className={styles.footeritem}>Have an account? </span>
          <Link to='/authorization' className={styles.footerlink}>
            Log In
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
