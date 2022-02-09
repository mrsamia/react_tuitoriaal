import React from 'react';

function Button(props) {

    return (
        <div>
            <button className={props.clsname} onClick={props.onclck} style={props.style}>{props.name}</button>
        </div>
    );
}

export default Button;