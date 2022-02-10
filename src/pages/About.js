import React, { Component } from 'react';
import Button from '../component/Button';
import Input from '../component/Input';

class About extends Component {

    click=()=> {
        alert("Button is Clicked");
    }


    render() {
        return (
            <div>
                <h1>About</h1>
                <Button clsname="btn btn-danger" name="Read More" onclck={this.click} style={{height:'50px',width:'150px',fontSize:20 }}/>
                <br></br>
                <Input name="UserName" placeholder="Your Name"/>
              

            </div>
        );
    }
}

export default About;