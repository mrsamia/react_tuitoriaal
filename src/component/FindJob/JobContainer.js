import React from 'react';
import JobDescription from './JobDescription';
import JobTitle from './JobTitle';
import Price from './Price';
import Budget from './Budget';
//  import data from './data.json';

function JobContainer(props) {

    return (

        <div className='container'>
            <JobTitle title={props.title}/>
            <Price price={props.price}/>
            <Budget budget={props.budget}/>
            <JobDescription text={props.text}/>
       
        </div>
    );
}


export default JobContainer;