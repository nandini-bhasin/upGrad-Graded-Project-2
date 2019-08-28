import React, {Component} from 'react';

class Api extends Component {
  
    constructor(){
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount(){
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        });
        
    }

    render(){
        var {isLoaded, items} = this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }
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
