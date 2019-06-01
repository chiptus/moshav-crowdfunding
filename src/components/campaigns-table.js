import React from 'react';
import { Table } from 'react-bootstrap';

export const CampaignsTable = ({ campaigns }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Amount Collected</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map(({ title, description, url, amountCollected, currency }) => (
          <tr key={url}>
            <td style={{ whiteSpace: 'nowrap' }}>
              <a href={url} rel="noopener noreferrer" target="_blank">
                {title}
              </a>
            </td>
            <td>{description}</td>
            <td>
              {amountCollected} {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
