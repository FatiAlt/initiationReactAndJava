import React from 'react';

class Input extends React.Component {

    constructor () {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
       // mettre à jour value avec event.target.value
       
       this.setState({ value: event.target.value})

       }
    
    

    render() {
        return (
            <input onChange={this.handleChange} value={
                this.state.value}/>
        );
            }
 }



export default Input;