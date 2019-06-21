import React from 'react';

import styles from './main-page.module.css';

export function MainPage() {
  return (
    <div className={styles.mainPage}>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="http://res.cloudinary.com/chiptus/video/upload/v1560884047/moshav-header.jpg"
        id="bgvid"
        className={styles.videoBackground}>
        <source
          src="https://res.cloudinary.com/chiptus/video/upload/q_auto:eco/v1560884047/moshav-header.mp4"
          type="video/mp4"
        />
      </video>
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
