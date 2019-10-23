import React, { Component, Fragment } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Edu_Exp from './education/Edu_Exp.jsx';
import Footer from './Footer.jsx';

import axios from 'axios';

class Profile extends Component {
   constructor(props){
       super(props);
       this.state={
        employee : []
    }
   }
    componentDidMount(){
        const userId = this.props.match.params.user_id;
        console.log(userId);
        axios.get(`http://localhost:5000/api/User/${userId}`)
        .then(res => {
            const User = res.data;
            this.setState({
                employee : User
            })
        }).catch(err => console.log(err));
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
             <Edu_Exp edu_exp = {this.state.employee}/>
            <Footer/>
        </Fragment>
    )
   }
}

export default Profile;