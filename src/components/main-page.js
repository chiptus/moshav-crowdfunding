import React from 'react';

import styles from './main-page.module.css';
console.log(styles);
export function MainPage() {
  return (
    <div className={styles.mainPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Moshav Mevo Modi'im</h1>
        <div className={styles.headerButtons}>
          <a href="/about" className={styles.aboutButton}>
            ABOUT
          </a>
          <a href="#submit" className={styles.submitButton}>
            + SUBMIT A CAMPAIGN
          </a>
        </div>
      </header>
      <h3 className={styles.about}>
        <a href="#campaigns">
          A collection of links to fund raising campaigns that were created to help our Moshav friends in their tragedy.
        Please use these links to donate.
        <div className={styles.arrowDown} />
        </a>
      </h3>
    </div>
  );
}
