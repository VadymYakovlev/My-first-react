// * Components
import cn from 'classnames';
import Wrapper from '../Wrapper/Wrapper';
import { Link } from 'react-router-dom';

// * Styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={cn([styles.header])}>
      <Wrapper className={styles.wrapper}>
        <Link to='/'>Main</Link>
        <Link to='/about'>About</Link>
        <Link to='/registration'>Registration</Link>
        <Link to='/authorization'>Authorization</Link>
      </Wrapper>
    </header>
  );
};

export default Header;
