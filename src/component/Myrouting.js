import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Notfound from '../pages/Notfound';
// import App from '../App';

class Myrouting extends Component {
    render() {
        return (
            <div>
                
                
               <Switch>
                {/* <Route exact path="/" element={(<App/>)}/> */}
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Team" component={Team}/>
                <Route component={Notfound}/>
               </Switch>
             
                
            </div>
        );
    }
}

export default Myrouting;