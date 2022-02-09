import React, { Component } from 'react';
import{NavLink} from "react-router-dom";

class Mynav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:"green"}} to="/">Home</NavLink></li>
                    <li><NavLink  activeStyle={{color:"green"}} to="/About">About</NavLink></li>
                    <li><NavLink  activeStyle={{color:"green"}} to="/Contact">Contact</NavLink></li>
                    <li><NavLink  activeStyle={{color:"green"}} to="/Team">Team</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Mynav;