/* eslint-disable react/prop-types */

import cn from 'classnames';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({
  text = 'default text',
  type = 'button',
  color = '',
  href = '',
  onClick,
  disabled = false,
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

  if (href) {
    return (
      <Link
        target="_blank"
        href={href}
        onClick={onClick}
        className={cn(stylelist)}
      >
        <span> {text}</span>{' '}
      </Link>
    );
  }

  return (
    <button
      className={cn(stylelist)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span> {text}</span>
    </button>
  );
};

export default Button;
