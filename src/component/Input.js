// import React from 'react';
import '../style/input.css';

// function Input(props) {
//     return (
//         <div>
//             <input name={props.name} placeholder={props.placeholder} />
//         </div>
//     );
// }

// export default Input;


import React, { Component } from 'react';

class Input extends Component {


constructor(){
    super();
    this.state={
        tittle:"Input Feild",
        username:" "
    }
}


onchangehndler=(event)=>{
  var myvalue= event.target.value;
  this.setState({username:myvalue})
}


    render() {
        return (
            <div>
                <h6>{this.state.tittle}</h6>
                <h6>{this.state.username}</h6>
                 <input name={this.props.name} placeholder={this.props.placeholder} onChange={this.onchangehndler}/>
            </div>
        );
    }
}

export default Input;