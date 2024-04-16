/* eslint-disable react/prop-types */

import cn from 'classnames';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({
  text = 'Click me',
  type = 'button',
  color = '',
  link = 'https://www.facebook.com/',
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

  if (link) {
    return (
      <Link
        target="_blank"
        link="https://www.facebook.com/"
        onClick={onClick}
        className={cn(stylelist)}
      >
        <span> {text}</span>{' '}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(stylelist)}>
      <span> {text}</span>
    </button>
  );
};

export default Button;
