// * Components
import LIST from './Aside.data';

// * Styles
import styles from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Aside</h2>
      <ul className={styles.list}>
        {LIST.map((_, index) => (
          <li key={'aside-item-' + index} className={styles.item}></li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
