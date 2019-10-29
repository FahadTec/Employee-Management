import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
// import Developers from './developer/Developers.jsx';
import Routes from './routing/Routes.jsx';
import Login from './auth/Login.jsx';
// import {browserHistory} from 'history';

class App extends Component{
    render(){
        
        return(
            <Router>
                <Fragment>
                    
                    <Switch>
                       <Route exact path='/' component={Login}/>
                       <Route component={Routes}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;