import React, {Component} from 'react';
import GetDetails from './GetDetails.js'

// component to get the coins list

class GetCoinsList extends Component {
  
    // constructor and initialisation
    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        // API to find get the coins list 
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        });
    }

    // display
    render(){
        var {isLoaded, items} = this.state;
        var name = this.props.name;
        var btnClicked = this.props.btnClicked;

        // page not loaded
        if(!isLoaded){
            return <div>Loading the coin list</div>
        }
        // page loaded
        else{

            var nameId = -1;

            //To find out the coin ID corresponding to the name / ID given
            for(var i=0; i<items.length; i++){
                if(items[i].name === name || items[i].id === name){
                    nameId = items[i].id;
                    break;
                }
            }

            //If the name given is final, i.e. button was clicked
            if(btnClicked){
                //If the name wasn't found in the coin list
                if(nameId === -1){
                    return(
                        <div>Sorry, the coin does not exist</div>
                    )
                }
                //The name was found in the coin list
                else{
                    return (
                        <div className="api">                            
                            <GetDetails nameId = {nameId}/>
                        </div>
                         
                    )
                }
                
            }
            //Button has not been clicked
            else {
                return(
                    <div>Search for a coin</div>
                )
            }
            
        }
        
    }

}

export default GetCoinsList;
