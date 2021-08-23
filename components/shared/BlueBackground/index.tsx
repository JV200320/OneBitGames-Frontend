import React from 'react';
import styles from './styles.module.css';

export const BlueBackground: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}
