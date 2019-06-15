import React, { useState } from 'react';

const readMoreButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#007bff',
  marginLeft: '0.5em',
};

export function CampaignCard({ campaign, ...props }) {
  const [isCollapsed, description, toggleCollapsed] = useCollapsedText(campaign.description || '');
  return (
    <div {...props}>
      <img alt={campaign.title} src={campaign.imageUrl} style={{ maxHeight: '10em', objectFit: 'contain' }} />
      <div>
        <div>
          <a href={campaign.url}>{campaign.title}</a>
        </div>
        <div>
          {isCollapsed && description.short ? (
            <span className="short-text">
              {description.short}...
              <button className="read-more-button" style={readMoreButtonStyle} onClick={toggleCollapsed}>
                Read more
              </button>
            </span>
          ) : (
            <span className="full-text">{description.full}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function useCollapsedText(text, maxLength = 200) {
  const [isCollapsed, setCollapsed] = useState(true);

  function toggleCollapsedState() {
    setCollapsed(!isCollapsed);
  }

  let short = text.substring(0, maxLength);
  if (text[maxLength + 1] !== ' ') {
    short = short.substring(0, short.lastIndexOf(' '));
  }

  const value = {
    full: text,
    short,
  };

  return [isCollapsed, value, toggleCollapsedState];
}
