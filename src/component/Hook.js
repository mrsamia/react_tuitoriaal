import React, { useState } from 'react';

function Hook(props) {

    const [valuee, SetValue] = useState({
        name: "Samia",
        Age: "25"
    })

    const setName=()=>{
     SetValue({name:"Rony"})
         
    }


    return (
        <div>
            <div>
                <h6>name:{valuee.name}</h6>
               
            </div>
            <div>
                <button className='btn btn-danger' onClick={setName}>Hook-setState</button>
            </div>
        </div>
    );
}

export default Hook;