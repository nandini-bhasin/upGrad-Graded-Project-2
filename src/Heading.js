import React, {Component} from 'react';
import './App.css';
import './Heading.css';
import GetId from './GetId.js';
import ReactDOM from 'react-dom';

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
    const {name, btnClicked} = this.state;
    const state = this.state;
    this.setState({btnClicked: !state.btnClicked});
    ReactDOM.render(<GetId items={this.props.items} name={name} btnClicked={btnClicked}/>, document.getElementById('divGetId'));
  }


  render(){
    const {name, btnClicked} = this.state;
   
      return(
        <div className="headingStyles">
        {/* form */}
        <div className="input-group input-group-sm">
          <input type="text" placeholder="Enter the Crypto Currency name" name="name" id="name" className="form-control" onChange={this.inputChangeHandler}/>
          <button className="btn btn-success btn-sm" onClick={this.buttonHandler}>Get Info about coin</button>
        </div>
  
        <div id="divGetId"></div>
        {/* <GetId items={this.props.items} name={name} btnClicked={btnClicked}/> */}

      </div>
      )
    
  }

}

export default Heading;
