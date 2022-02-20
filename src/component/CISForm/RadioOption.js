
import React from 'react';

function RadioOption(props) {
    return (
        <div>
            <input type='radio' className='cis-radio-option' value={props.value} name={props.name}/>{props.label}
        </div>
    );
}

export default RadioOption;