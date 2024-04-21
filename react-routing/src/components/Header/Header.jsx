// * Components
import cn from 'classnames';
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={cn([styles.header])}>
      <Wrapper className={styles.wrapper}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/registration">Registration</Link>
      </Wrapper>
    </header>
  );
};

export default Header;
