import React from 'react';
import QuestionContainer from './QuestionContainer';
import './style.css';

function CISForm(props) {
    return (
        <div className='cis-form'>
            <QuestionContainer question='This is question 1' options={[1,2,3,4,5]}/>
            <QuestionContainer question='This is question 2' options={[1,2,3,4]}/>
            <QuestionContainer question='This is question 3' options={['Good', 'Bad']}/>
            <QuestionContainer question='Gender' options={['Female', 'Male', 'Other']}/>
        </div>
    );
}

export default CISForm;