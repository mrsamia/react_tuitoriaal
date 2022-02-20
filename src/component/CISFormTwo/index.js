import React from 'react';
import QuestionContainer from './QuestionContainer';

function index(props) {
    return (
        <div>
            <QuestionContainer question=" This is question 1" options={[1,2,3,4,5]}/>
            <QuestionContainer question=" This is question 1" options={["good","bad"]}/>
        </div>
    );
}

export default index;