// import React from 'react'
import React, { Component } from 'react';

class Props extends Component{

    render() {

        const {
            firstName,
            lastName,
            age,
            hairColor,
        } = this.props;
        
        return (
            <>
            <h2>{this.props.lastName}, {this.props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            
        <div></div>
            </>

        );
    }
}


export default Props;