import React from 'react';
import styles from './button.module.css';

export function Button({ children, className, ...props }) {
  const classes = [styles.button, className].join(' ');
  return (
    <button type="button" {...props} className={classes}>
      {children}
    </button>
  );
}
