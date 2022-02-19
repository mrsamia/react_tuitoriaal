import React from 'react';
import "./CIS.css";

function Option(props) {
    return (
        <div>
             <input className='input_style' type={props.type} value={props.value} name={props.name} /> {props.OptionName}
        </div>
    );
}

export default Option;