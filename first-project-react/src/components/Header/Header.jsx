// * Components
import Wrapper from './../Wrapper/Wrapper';
import Button from '../Button/Button.';
import LIST from './Header.data';
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';

const Header = () => {
  const SignIn = () => {
    console.log('Sign in');
  };

  return (
    <header className={styles.header}>
      <Wrapper>
        <Logo />
        <div>
          <Button text={'Sign in'} onClick={SignIn} />
          <Button text={'Sign up'} />
          <Button color="red" />
          <Button color="white" />
        </div>

        <div className={styles.title}>Blog name</div>
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
