import React from 'react';
import { FeaturedCampaign } from './FeaturedCampaign';

import styles from './CampaignsList.module.css';

export function CampaignsList({ campaigns }) {
  if (!campaigns.length) {
    return null;
  }

  const [first, ...rest] = campaigns;
  return (
    <div id="campaigns" className={styles.campaignsList}>
      <FeaturedCampaign className={styles.featuredCampaign} campaign={first} />
      {rest.map(campaign => (
        <FeaturedCampaign className={styles.campaignCard} key={campaign.url} campaign={campaign} />
      ))}
    </div>
  );
}
