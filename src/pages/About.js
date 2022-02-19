import React, { Component } from 'react';
import Button from '../component/Button';
import CIS_ques from '../component/CIS/CIS_ques';
import Hook from '../component/Hook';
import HookPrack from '../component/HookPrac';
import Input from '../component/Input';
import Json from '../component/Json';
import Option from '../component/CIS/Option';
import Option_1 from '../component/CIS/Option_1';
import CISForm from '../component/CISForm';

class About extends Component {

    click=()=> {
        alert("Button is Clicked");
    }

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
                <h1>About</h1>
                <Button clsname="btn btn-danger" name="Read More" onclck={this.click} style={{height:'50px',width:'150px',fontSize:20 }}/>
                <br></br>
                <h6>Name:{this.state.username}</h6>
                <Input name="UserName" placeholder="Your Name" onchangehndler={this.onchangehndler}/><br></br>
                <Input name="Address" placeholder="Address"/><br></br>
              
              <Json/><br></br><br></br>
              <Hook/><br></br><br></br>
              <HookPrack/><br></br><br></br>

              <CIS_ques question="How to use radio buttons in ReactJS?"/>
              <Option type="radio" value="Male" name="gender" OptionName="While working with a web"/>
              <Option type="radio" value="Male" name="gender" OptionName="How to use it in a group"/>
              <Option type="radio" value="Male" name="gender" OptionName="The selected radio button "/>
              
             <Option_1/>

             <CISForm/>

            </div>
        );
    }
}

export default About;