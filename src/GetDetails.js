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

    componentDidMount(){
        var  url = 'https://api.coingecko.com/api/v3/coins/' + this.props.nameId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                details: json
            })
        });
    }

    // display
    render(){
        var {details, isLoaded} = this.state;

        // page not loaded
        if(!isLoaded){
            return <div>Loading...</div>
        }
        // page loaded
        else{
            console.log(details);
            return (
                <div className="api">

                    <header>
                        {details.name} - {details.symbol}
                    </header>
                </div>
            )
        }
        
    }

}

export default GetDetails;
