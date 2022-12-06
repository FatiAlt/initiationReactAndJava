import React from 'react'


function FunctionalButton(props) {
    console.log(props)
    return (
        <button type={props.type}>
            {props.text}
        </button>
    );
}

export default FunctionalButton;

