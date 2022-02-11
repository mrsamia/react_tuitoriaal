import React, { Component } from 'react';
import Login from '../containers/Login';

class Team extends Component {
    render() {
        return (
            <div>
                <h1>
                Team
                </h1>
               <form>
                   <Login/>
               </form>
            </div>
        );
    }
}

export default Team;