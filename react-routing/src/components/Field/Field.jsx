/* eslint-disable react/prop-types */
import cn from 'classnames';
import styles from './Field.module.css';

const Field = ({
  title,
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  textarea,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}

        {textarea ? (
          <Textarea />
        ) : (
          <>
            <input
              className={styles.input}
              type={type}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
            />
            <div className={styles.error}>{error}</div>
          </>
        )}
      </label>
    </>
  );
};

const Textarea = ({
  title,
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <textarea
          className={cn([styles.textarea, styles.input])}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className={styles.error}>{error}</div>
      </label>
    </>
  );
};

export default Field;
