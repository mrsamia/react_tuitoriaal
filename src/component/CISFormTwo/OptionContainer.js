import React from 'react';
import Option from './Option';

function OptionContainer(props) {
    return (
        <div>
            {props.options.map((data) =>(<Option level={data} value={data} name={props.name}/>))}
            
        </div>
    );
}

export default OptionContainer;




