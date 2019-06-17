import { useState } from 'react';

export function useCollapsedText(text, maxLength = 200) {
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
