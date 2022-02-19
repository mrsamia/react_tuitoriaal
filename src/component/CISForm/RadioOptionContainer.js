import React from 'react';
import RadioOption from './RadioOption';

function RadioOptionContainer(props) {
    return (
        <div className='radio-container'>
            {props.options.map(option => <RadioOption label={option} value={option} name={props.name} />)}
        </div>
    );
}

export default RadioOptionContainer;