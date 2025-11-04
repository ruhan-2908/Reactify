import React from "react";
class Car extends React.Component{
    constructor()
    {
        super();
        this.state = { color : "Red"}; 
    }

    render()
    {
        return (
            <>
            <h2>My Car Color is {this.state.color} </h2>
            <button onClick={() => { this.setState({color : 'Blue'})}}> Change color</button>
            </>
        )
    }
}


export default Car;