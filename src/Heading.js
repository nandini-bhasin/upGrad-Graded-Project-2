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

  // buttonHandler = (e) => {
  //   const name = this.state;
  //   let url = 'https://api.coingecko.com/api/v3/coins/' + name;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => {
  //         this.setState({
  //             isLoaded: true,
  //               items: json
  //           })
  //       });
  // }

  inputChangeHandler = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  }

  buttonHandler = (e) => {
    this.setState({btnClicked: true});
    console.log(this.state);
  }


  render(){
    const {name, btnClicked} = this.state;
    // if(!btnClicked){
    //   return(
    //     <div className="headingStyles">
    //     {/* Title */}
    //     <h1>CryptoCoin Wiki</h1>
    //     {/* form */}
    //     <div className="input-group input-group-sm">
    //       <input type="text" placeholder="Enter the Crypto Currency name" name="name" id="name" className="form-control" onChange={this.inputChangeHandler}/>
    //       <button className="btn btn-success btn-sm" onClick={this.buttonHandler}>Get Info about coin</button>
    //     </div>
  
    //     <GetCoinsList/>
  
    //   </div>
    //   )
    // }

    // else {
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
    //}
    
  }

}

// function Heading() {
//   return (
//     <div className="headingStyles">
//       {/* Title */}
//       <h1>CryptoCoin Wiki</h1>
//       {/* form */}
//       <div className="input-group input-group-sm">
//         <input type="text" placeholder="Enter the Crypto Currency name" name="crypto" className="form-control"/>
//         <button className="btn btn-success btn-sm">Get Info about coin</button>
//       </div>

//       <GetCoinsList />
//     </div>
//   );
// }

export default Heading;
