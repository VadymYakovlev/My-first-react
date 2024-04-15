// // * Components

// * Components
import { useState } from 'react';

// * Styles
import styles from './Banner.module.css';

const Banner = () => {
  const [value, setValue] = useState('Default value');

  const onChangeEvent = (e) => {
    const v = e.target.value;
    setValue(v);
  };

  const resetInput = () => {
    setValue('');
  };

  return (
    <div className={styles.banner}>
      <h4>Value: {value}</h4>
      <input
        className={styles.input}
        type="text"
        value={value}
        onInput={onChangeEvent}
      />
      <button onClick={resetInput}>Reset</button>
    </div>
  );
};

export default Banner;

// import styles from './Banner.module.css';

// const Banner = () => {
//   return <span className={styles.banner}>Full-width banner image </span>;
// };

// export default Banner;

// const Banner = () => {
//   const [value, setValue] = useState('Default value ');
//   const onChangeEvent = (e) => {
//     const v = e.target.value;
//     setValue(v);
//   };

//   return (
//     <div className={styles.banner}>
//       <h4>Value: {value}</h4>
//       <input className={styles.input} type="text" onInput={onChangeEvent} />
//     </div>
//   );
// };

// export default Banner;
