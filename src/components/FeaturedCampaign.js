import React from 'react';
import styles from './FeaturedCampaign.module.css';
import { CollapsedText } from './collapsed-text';

export function FeaturedCampaign({ campaign, className }) {
  const donateButtonColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <div className={`${styles.featuredCampaign} ${className}`} style={{ backgroundImage: `url(${campaign.imageUrl})` }}>
      <div className={styles.cardBody}>
        <h1 className={styles.cardTitle}>
          <a href={campaign.url}>{campaign.title}</a>
        </h1>
        <CollapsedText text={campaign.description} className={styles.campaignDescription} />
        <div className={styles.donationLine}>
          <div className={styles.amountCollectedWrapper}>
            <div className={styles.amountCollected}>
              {campaign.amountCollected} {campaign.currency}
            </div>
            <div className={styles.amountCollectedText}>Amount Collected</div>
          </div>
          <a
            href={campaign.url}
            rel="button"
            className={styles.donateButton}
            style={{ backgroundColor: donateButtonColor }}>
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}
