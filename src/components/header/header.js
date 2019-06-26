import React from 'react';
import styles from './header.module.css';
import { ShareButton } from './share-button';
export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Moshav Mevo Modi'im</h1>
      <div className={styles.headerButtons}>
        {/* <a href="/about" className={styles.aboutButton}>
            ABOUT
          </a> */}
        <ShareButton />
        <a href="#submit" className={styles.submitButton}>
          + SUBMIT A CAMPAIGN
        </a>
      </div>
    </header>
  );
}
