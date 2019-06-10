import React from 'react';
import { Card } from 'react-bootstrap';

export function CampaignCard({ campaign, ...props }) {
  return (
    <Card {...props}>
      <Card.Img variant="top" src={campaign.imageUrl} style={{ maxHeight: '10em' }} />
      <Card.Body>
        <Card.Title>
          <a href={campaign.url}>{campaign.title}</a>
        </Card.Title>
        <Card.Text>{campaign.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
