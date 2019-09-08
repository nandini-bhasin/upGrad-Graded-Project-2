import React, {Component} from 'react';
import './App.css';
import './Heading.css';
import GetCoinsList from './GetCoinsList';

// Component to display heading

class Main extends Component {

  render(){
      return(
        <div className="headingStyles">
            {/* Title */}
            <h1>CryptoCoin Wiki</h1>
            
            <GetCoinsList/>
  
        </div>
      )
  }

}

export default Main;
