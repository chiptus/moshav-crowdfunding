import React from 'react';
import { Card } from 'react-bootstrap';

export function WholeWidthCampaignCard({ campaign, style, ...props }) {
  return (
    <Card style={{ ...style, flexDirection: 'row' }} {...props}>
      <Card.Img src={campaign.imageUrl} style={{ width: '20em' }} />
      <Card.Body>
        <Card.Title>
          <a href={campaign.url}>{campaign.title}</a>
        </Card.Title>
        <Card.Text>{campaign.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
