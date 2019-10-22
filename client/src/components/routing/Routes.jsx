import React from 'react';
import {Router , Route, Switch , browserHistory} from 'react-router-dom';
import Profile from '../profile/Profile.jsx';
import Login from '../auth/Login.jsx';
import Register from '../auth/Register.jsx';
import Developers from '../developer/Developers.jsx';
// import history from 'history';

const Routes = () => {
     
    return(
        <div>
            
            {/* <Router history={history}/> */}
           
           <Switch>
                       <Route path='/developers' component={Developers}/>
                       <Route path='/profile/:user_id' component={Profile}/>
                       <Route path='/login' component={Login}/>
                       <Route path='/register' component={Register}/>
                       
            </Switch>
           
        </div>
    )
}
export default Routes;