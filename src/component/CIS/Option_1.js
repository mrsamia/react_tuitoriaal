import React from 'react';
import CIS_ques from './CIS_ques';
import Option from './Option';

function Option_1(props) {
    return (
        <div>
             <CIS_ques question="How to use radio buttons in ReactJS?"/>
              <Option type="radio" value="Male" name="gender" OptionName="While working with a web"/>
              <Option type="radio" value="Male" name="gender" OptionName="How to use it in a group"/>
              <Option type="radio" value="Male" name="gender" OptionName="The selected radio button "/>
        </div>
    );
}

export default Option_1;