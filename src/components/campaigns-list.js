import React from 'react';
import { CampaignCard } from './campaign-card';
import { FeaturedCampaign } from './FeaturedCampaign';

import styles from './CampaignsList.module.css';

export function CampaignsList({ campaigns }) {
  if (!campaigns.length) {
    return null;
  }

  const [first, ...rest] = campaigns;
  return (
    <div id="campaigns" className="campaigns-list">
      <FeaturedCampaign className={styles.featureCampaign} campaign={first} />
      <div>
        {rest.map(campaign => (
          <CampaignCard style={{ width: '30%', flex: 'initial' }} key={campaign.url} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
