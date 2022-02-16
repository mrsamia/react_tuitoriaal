import { useState } from "react";


function HookPrack(){

const [value,SetValue]=useState({
    name:"Samia Rahman",
    Age:"25"
})


function ChangeName(){
    SetValue({name:"Rony"});
    alert("Successfully change the Name.");
}

    return(
       <div>
           <h6>Name:{value.name}</h6>
           <button className="btn btn-danger" onClick={ChangeName}>Hook-SetState</button>
       </div> 
    );
}
export default HookPrack;