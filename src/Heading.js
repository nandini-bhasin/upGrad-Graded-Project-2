import React, {Component} from 'react';
import './App.css';
import './Heading.css';
import GetCoinsList from './GetCoinsList';

// Component to display heading

class Heading extends Component {
  
  constructor(){
    super();
    this.state = {
      name: '',
      btnClicked: false
    }
  }

  //To get value of input field
  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  //To set btnClicked as true in case the button is clicked
  buttonHandler = (e) => {
    const state = this.state;
    this.setState({btnClicked: !state.btnClicked});
    console.log(this.state);
  }


  render(){
    const {name, btnClicked} = this.state;
   
      return(
        <div className="headingStyles">
        {/* Title */}
        <h1>CryptoCoin Wiki</h1>
        {/* form */}
        <div className="input-group input-group-sm">
          <input type="text" placeholder="Enter the Crypto Currency name" name="name" id="name" className="form-control" onChange={this.inputChangeHandler}/>
          <button className="btn btn-success btn-sm" onClick={this.buttonHandler}>Get Info about coin</button>
        </div>
  
        <GetCoinsList name={name} btnClicked={btnClicked}/>
  
      </div>
      )
    
  }

}

export default Heading;
