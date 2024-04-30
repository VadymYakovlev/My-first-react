import styles from './Select.module.css';

const Select = () => {
  return (
    <label>
      <div className={styles.select}>Country</div>
      <select className={styles.country}>
        <option value='' disabled defaultValue>
          Select country
        </option>
        <option value='1'>Austria</option>
        <option value='2'>Bulgaria</option>
        <option value='3'>Colombia</option>
        <option value='4'>Denmark</option>
        <option value='5'>France</option>
        <option value='6'>Germany</option>
        <option value='7'>Italy</option>
        <option value='8'>Poland</option>
        <option value='9'>Turkey</option>
        <option value='10'>Ukraine</option>
      </select>
    </label>
  );
};

export default Select;
