import React from 'react';
import './App.css';
import './Heading.css';

function Heading() {
  return (
    <div className="headingStyles">
        <h1>CryptoCoin Wiki</h1>
        <div className="input-group input-group-sm">
            <input type="text" placeholder="Enter the Crypto Currency name" name="crypto" className="form-control"/>
            <button className="btn btn-success btn-sm">Get Info about coin</button>
        </div>
    </div>
  );
}

export default Heading;
