import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { CampaignCard } from './campaign-card';
import { WholeWidthCampaignCard } from './whole-width-campagin-card';

export function CampaignsList({ campaigns }) {
  if (!campaigns.length) {
    return null;
  }

  const [first, ...rest] = campaigns;
  return (
    <div id="campaigns" className="campaigns-list">
      <WholeWidthCampaignCard campaign={first} style={{ marginBottom: '5em' }} />
      <CardDeck>
        {rest.map(campaign => (
          <CampaignCard style={{ width: '30%', flex: 'initial' }} key={campaign.url} campaign={campaign} />
        ))}
      </CardDeck>
    </div>
  );
}
