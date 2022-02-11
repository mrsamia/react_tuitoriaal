import React, { Component } from 'react';
import Index from '../component/Input/Index';
import '../style/input.css';

class Login extends Component {


    constructor() {
        super();
        this.state = {
            firstname: " ",
            lastname: " ",
            email: " ",
            password: " "
        }
    }

    onChangeHandler = (event) => {
        const myname = event.target.name;
        const myvalue = event.target.value;
        console.log(myname, myvalue)
        this.setState({ [myname]: myvalue });
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h6>FirstName: {this.state.firstname}</h6>
                <Index name="firstname" placeholder="Enter Firstname" onChange={this.onChangeHandler} /><br></br>

                <h6>LastName:  {this.state.lastname}</h6>
                <Index name="lastname" placeholder="Enter Lastname" onChange={this.onChangeHandler} /><br></br>

                <h6>Email:{this.state.email}</h6>
                <Index name="email" placeholder="Enter Email" onChange={this.onChangeHandler} /><br></br>

                <h6>Password:{this.state.password}</h6>
                <Index name="password" placeholder="Enter Password" onChange={this.onChangeHandler} /><br></br>

            </div>
        );
    }
}

export default Login;