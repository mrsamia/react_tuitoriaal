import React from 'react';

function QuestionTitle(props) {
    return (
        <div className='question-title'>
            <h6>{props.text}</h6>
        </div>
    );
}

export default QuestionTitle;