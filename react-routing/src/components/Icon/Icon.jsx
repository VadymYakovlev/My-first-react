/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import ICONS from './Icon.data';
import cn from 'classnames';

import styles from './Icon.module.css';

const Icon = ({ className = [], icon }) => {
  return (
    <svg className={cn([styles.icon, ...className])} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
