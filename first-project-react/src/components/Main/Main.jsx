// * Components
import Blog from './Blog/Blog';
import Aside from './Aside/Aside';

// * Styles
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <>
        <Blog />
        <Aside />
      </>
    </main>
  );
};

export default Main;
