// GroceryListItem.js
import React, { useState } from 'react';

const GroceryListItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  const style = {
    fontWeight: hover ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {item}
    </li>
  );
};

export default GroceryListItem;
