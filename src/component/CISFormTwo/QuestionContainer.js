import React from 'react';
import QuestionTitle from './QuestionTitle';
import OptionContainer from './OptionContainer';

function QuestionContainer(props) {
    return (
        <div>
            <QuestionTitle title={props.question}/>
            <OptionContainer options={props.options} name={props.question}/>
        </div>
    );
}

export default QuestionContainer;




