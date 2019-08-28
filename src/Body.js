import React from 'react';
import './App.css';
import Api from './Api.js';

function Body() {
  return (
    <div>
        <p>Search for a coin</p>
        <Api />
    </div>
  );
}

export default Body;
