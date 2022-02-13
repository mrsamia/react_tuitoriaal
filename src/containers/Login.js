import React, { Component } from 'react';
import Index from '../component/Input/Index';
import '../style/input.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        }
    }

    onChangeHandler = (event) => {
        const myname = event.target.name;
        const myvalue = event.target.value;
        this.setState({ [myname]: myvalue });
    }

    render() {
        
        return (

            <div>
                
                 <div>
                    <h6>FirstName: {this.state.firstname}</h6>
                    <Index name="firstname" placeholder="Enter Firstname" onChange={this.onChangeHandler} /><br></br>
                </div>

                {this.state.firstname.toLowerCase()==="rony" &&<div>
                    <h6>LastName:  {this.state.lastname}</h6>
                    <Index name="lastname" placeholder="Enter Lastname" onChange={this.onChangeHandler} /><br></br>
                </div>}

               { this.state.lastname.toLowerCase()==="mim" && <div>
                    <h6>Email:{this.state.email}</h6>
                    <Index name="email" placeholder="Enter Email" onChange={this.onChangeHandler} /><br></br>
                </div>}

               {this.state.email.toLowerCase()==="15203060@iubat.edu" && <div>
                    <h6>Password:{this.state.password}</h6>
                    <Index name="password" placeholder="Enter Password" onChange={this.onChangeHandler} /><br></br>
                </div>}
                
            </div>
        );
    }
}

export default Login;