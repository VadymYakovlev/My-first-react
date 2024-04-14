/* eslint-disable react/prop-types */

import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({
  text = 'default text',
  type = 'button',
  color = 'default',
  onClick,
}) => {
  const stylelist = [styles.button];

  switch (color) {
    case 'red': {
      stylelist.push(styles.red);
      break;
    }
    case 'white': {
      stylelist.push(styles.white);
      break;
    }
    default: {
      console.log('!!!');
    }
  }

  return (
    <button type={type} onClick={onClick} className={cn(stylelist)}>
      <span> {text}</span>
    </button>
  );
};

export default Button;
