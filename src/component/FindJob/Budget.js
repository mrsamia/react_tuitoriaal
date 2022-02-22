import React from 'react';

function Budget(props) {
    return (
        <div className='row'>
            <div className='col-6'>
                <p>{props.budget}<br></br>Budget</p>
                
            </div>
            <div className='col-6'>
                <h6>Experience Level</h6>
                <p>Experience Level</p>
            </div>
        </div>
    );
}

export default Budget;