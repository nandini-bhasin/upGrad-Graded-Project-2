import React, {Component} from 'react';

// component to get the coins list

class Api extends Component {
  
    // constructor and initialisation
    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        // API
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

        // page not loaded
        if(!isLoaded){
            return <div>Loading...</div>
        }
        // page loaded
        else{
            return (
                <div className="api">
                    <ol>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} | ID: {item.id}
                            </li>
                        ))}
                    </ol>
                </div>
            )
        }
        
    }

}

export default Api;
