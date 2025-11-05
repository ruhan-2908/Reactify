import React from "react";
class Car extends React.Component{
    constructor()
    {
        super();
        this.state = { color : "Red",model:"Ford"}; 
    }


    
    
    render()
    {
        return (
            <>
            <h2>My Car Color is {this.state.color} and model is {this.state.model} </h2>
            <button onClick={() => { this.setState((prev)=> {return {...prev,color:"Blue"}})}}> Change color</button>
            </>
        )
    }
}


export default Car;