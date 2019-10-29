import React, { Component, Fragment } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Edu_Exp from './education/Edu_Exp.jsx';

import axios from 'axios';

class Profile extends Component {
    _isMounted = false;
   constructor(props){
       super(props);
       this.state={
        employee : []
    }
   }
    componentDidMount(){
        this._isMounted = true;
        const userId = this.props.match.params.user_id;
        console.log(userId);
        axios.get(`http://localhost:5000/users/viewProfile/${userId}`)
        .then(res => {
            const User = res.data;
            this.setState({
                employee : User
            })
        }).catch(err => console.log(err));
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    componentWillMount(){
        if(!localStorage.getItem('jwt-token')){
            this.props.history.push('/')
        }
    }
   render(){
       console.log('educations change');
       console.log(this.state.employee);
       console.log('this is props');
       console.log(this.props.match.params.user_id);
    return (
        <Fragment>
            <Home home={this.state.employee}/>
            <About about={this.state.employee} skill={this.props.match.params.user_id}/>
            <Services/>
            <Edu_Exp edu_exp={this.state.employee}/>
            
        </Fragment>
    )
   }
}

export default Profile;