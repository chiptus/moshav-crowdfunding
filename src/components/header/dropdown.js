import React, { useEffect, useState, useRef } from 'react';
import styles from './dropdown.module.css';
const Dropdown = ({ children, toggler, onChange }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  function toggle() {
    setOpen(!open);
  }

  return (
    <div ref={node} className={styles.dropdown}>
      {toggler(toggle)}
      {open && <ul className={styles.dropdownMenu}>{children(handleChange)}</ul>}
    </div>
  );
};

export default Dropdown;
