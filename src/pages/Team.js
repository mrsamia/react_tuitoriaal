import React, { Component } from 'react';
import Login from '../containers/Login';
import CISFormTwo from '../component/CISFormTwo';

class Team extends Component {
    render() {
        return (
            <div>
                <h1>
                Team
                </h1>
               <form>
                   <Login/>
                   <CISFormTwo/>
               </form>
            </div>
        );
    }
}

export default Team;