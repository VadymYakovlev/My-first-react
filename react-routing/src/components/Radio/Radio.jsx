/* eslint-disable react/prop-types */

const RadioButton = ({ id, name, value, label }) => {
  return (
    <label>
      <input type='radio' id={id} name={name} value={value} />
      {label}
    </label>
  );
};

export default RadioButton;
