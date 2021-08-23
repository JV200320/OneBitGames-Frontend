import React from 'react';
import styles from './styles.module.css';

interface TitleAndPath {
  title: string,
  path: string
}

export const TitleAndPath: React.FC<TitleAndPath> = ({ title, path }) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.styledPath}>{path}</span>
    </div>
  )
}
