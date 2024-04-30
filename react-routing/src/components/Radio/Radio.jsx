// * Base
import RadioButton from './RadioButton';

// * Styles
import styles from '../Radio/RadioButton.module.css';

const Radio = () => {
  return (
    <label className={styles.radio}>
      <RadioButton id='color-one' name='gender' value='male' label='Male' />
      <RadioButton id='color-two' name='gender' value='female' label='Female' />
    </label>
  );
};

export default Radio;
