import React, {Component} from 'react';

// component to get the coins list

class GetDetails extends Component {
  
    // constructor and initialisation
    constructor(){
        super();
        this.state = {
            // items: props.itemName,
            details: [],
            isLoaded: true
        };
    }

    // componentDidMount(){
        
    //     fetch('https://api.coingecko.com/api/v3/coins/list')
    //     .then(response => response.json())
    //     .then(json => {
    //         this.setState({
    //             isLoaded: true,
    //             items: json
    //         })
    //     });
    // }

    // display
    render(){
        var {isLoaded} = this.state;

        // page not loaded
        if(!isLoaded){
            return <div>Loading...</div>
        }
        // page loaded
        else{
            return (
                <div className="api">
                    <ol>
                        {this.props.coinList.itemName.map(item => (
                            <li>
                                Name: {item} 
                            </li>
                        ))}
                    </ol>
                    name id: {this.props.nameId}
                </div>
            )
        }
        
    }

}

export default GetDetails;
