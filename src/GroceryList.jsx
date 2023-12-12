// GroceryList.js
import React from 'react';
import GroceryListItem from './GroceryListItem';

const GroceryList = () => {
  const groceryItems = ['Cucumbers', 'Kale'];

  return (
    <ul>
      {groceryItems.map((item, index) => (
        <GroceryListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default GroceryList;
