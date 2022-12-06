import React from 'react';

class Button extends React.Component {

    constructor () {
        super();
        this.state = {
            count:  0
        }
    }

    handleClick = () => {
        this.setState((state) => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            //<button onClick={this.handleClick}>
                //{this.state.count}
            <button
            style={{backgroundColor: 'black', color: 'white'}}
            onClick={this.handleClick}
            disabled={this.props.disabled}
        >
            {this.props.text} {this.state.count}
            </button>
        //retourne un bouton html avec le texte submit
        );

    }
}




export default Button;