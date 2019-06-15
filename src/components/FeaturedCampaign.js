import React from 'react';
import styles from './FeaturedCampaign.module.css';
export function FeaturedCampaign({ campaign }) {
  return (
    <div className={styles.featuredCampaign}>
      <img alt={campaign.title} src={campaign.imageUrl} className={styles.image} />
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <a href={campaign.url}>{campaign.title}</a>
        </div>
        <div className={styles.campaignDescription}>{campaign.description}</div>
      </div>
    </div>
  );
}
