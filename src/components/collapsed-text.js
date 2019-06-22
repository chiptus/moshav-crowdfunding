import React from 'react';
import { useCollapsedText } from '../hooks/use-collapsed-text';

const readMoreButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'lightblue',
  fontSize: '1em',
  display: 'block',
  padding: 0,
};

export function CollapsedText({ text, className }) {
  const [isCollapsed, description, toggleCollapsed] = useCollapsedText(text || '', 100);

  return (
    <div className={className}>
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
  );
}
