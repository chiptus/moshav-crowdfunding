import React from 'react';
import styles from './FeaturedCampaign.module.css';

export function FeaturedCampaign({ campaign, className }) {
  const donateButtonColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // const shortText = getShortText(campaign.description || '');
  return (
    <div className={`${styles.featuredCampaign} ${className}`} style={{ backgroundImage: `url(${campaign.imageUrl})` }}>
      <div className={styles.cardBody}>
        <h1 className={styles.cardTitle}>
          <LinkToCampaign className={styles.readMoreButton} url={campaign.url}>
            {campaign.title}
          </LinkToCampaign>
        </h1>
        {campaign.description && (
          <span className={styles.campaignDescription}>
            <div className={styles.campaignDescriptionText}>{campaign.description}</div>
            <LinkToCampaign className={styles.readMoreButton} url={campaign.url}>
              Read More
            </LinkToCampaign>
          </span>
        )}
        <div className={styles.donationLine}>
          <div className={styles.amountCollectedWrapper}>
            <div className={styles.amountCollected}>
              {campaign.amountCollected} {campaign.currency}
            </div>
            <label>Amount Collected</label>
          </div>
          <LinkToCampaign
            url={campaign.url}
            className={styles.donateButton}
            style={{ backgroundColor: donateButtonColor }}>
            Donate Now
          </LinkToCampaign>
        </div>
      </div>
    </div>
  );
}

function getShortText(text, maxLength = 200) {
  let short = text.substring(0, maxLength);
  if (text[maxLength + 1] !== ' ') {
    short = short.substring(0, short.lastIndexOf(' '));
  }
  return short;
}

function LinkToCampaign({ url, children, ...props }) {
  return (
    <a href={url} rel="button noopener noreferrer" target="_blank" {...props}>
      {children}
    </a>
  );
}
