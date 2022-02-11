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




// onchangehndler=(event)=>{
//   var myvalue= event.target.value;
//   this.setState({username:myvalue})
// }


    render() {
        return (
            <div>
                 <input name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onchangehndler}/>
            </div>
        );
    }
}

export default Input;