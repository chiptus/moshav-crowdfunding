import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { CampaignCard } from './campaign-card';

export function CampaignsList({ campaigns }) {
  if (!campaigns.length) {
    return null;
  }

  const [first, ...rest] = campaigns;
  return (
    <div className="campaigns-list">
      <CampaignCard campaign={first} />
      <CardDeck>
        {rest.map(campaign => (
          <CampaignCard style={{ width: '30%', flex: 'initial' }} key={campaign.url} campaign={campaign} />
        ))}
      </CardDeck>
    </div>
  );
}
