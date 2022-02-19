import React from 'react';
import QuestionTitle from './QuestionTitle';
import RadioOptionContainer from './RadioOptionContainer';

function QuestionContainer(props) {
    return (
        <div className='question-container'>
            <QuestionTitle text={props.question} />
            <RadioOptionContainer options={props.options} name={props.question}/>
        </div>
    );
}

export default QuestionContainer;