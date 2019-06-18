import React, { useState } from 'react';

export function NotebookTextarea(props) {
  // const [ref, height] = useResizeObserver();
  const [rows, setRows] = useState(2);

  return <textarea {...props} rows={rows} onKeyUp={handleKeyUp(handleEnter)} />;

  function handleEnter() {
    setRows(rows + 1);
  }
}

function handleKeyUp(handler) {
  return function handleEvent(event) {
    if (event.keyCode !== 13) {
      return;
    }
    console.log('enter');
    handler(event);
  };
}
