// * Components
import LIST from './Blog.data';

// * Styles
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Blog</h2>
      <ul className={styles.list}>
        {LIST.map((_, index) => (
          <li key={'section-item-' + index} className={styles.item}></li>
        ))}
      </ul>
    </section>
  );
};

export default Blog;
