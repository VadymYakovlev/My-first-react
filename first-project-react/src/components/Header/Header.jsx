// * Components
import LIST from './Header.data';
import Logo from '../Logo/Logo';

// * Styles
// import baseStyles from '../../styles/base.module.css';
import styles from './Header.module.css';
import Wrapper from './../Wrapper/Wrapper';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <Logo />
        {/* <div className={baseStyles.wrapper}> */}
        <div className={styles.title}>Blog name</div>
        {/* </div> */}
        <ul className={styles.list}>
          {LIST.map((_, index) => (
            <li key={'header-item-' + index} className={styles.item}></li>
          ))}
        </ul>
      </Wrapper>
    </header>
  );
};

export default Header;
