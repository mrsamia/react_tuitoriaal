import React from 'react';
import "./style.css";

function Option(props) {
    return (
        <div>
            <input type="radio" className='radio_option' value={props.value} name={props.name}/>{props.level}
        </div>
    );
}

export default Option;