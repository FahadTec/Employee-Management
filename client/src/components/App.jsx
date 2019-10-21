import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Nav from './profile/Nav.jsx';
// import Developers from './developer/Developers.jsx';
import Routes from './routing/Routes.jsx';
import Register from './auth/Register.jsx';
// import {browserHistory} from 'history';

class App extends Component{
    render(){
        
        return(
            <Router>
                <Fragment>
                    <Nav/>
                    <Switch>
                       <Route exact path='/' component={Register}/>
                       <Route component={Routes}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;