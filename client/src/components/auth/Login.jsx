import React, { Component, Fragment } from 'react';
// import {Link} from 'react-router-dom';
import 'jwt-decode';
import axios from 'axios';

window.jwtDecode = require('jwt-decode');


class Login extends Component {
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.login = this.login.bind(this);
    }

    email = (e) =>{
        this.setState({email: e.target.value})
    }
    password = (e) =>{
        this.setState({password: e.target.value})
    }

    login = (e) => {
        e.preventDefault();
        // const body = JSON.stringify({
        //             email : this.state.email,
        //             password : this.state.password
        //         })
        axios.post('http://localhost:5000/auth/login', {
            email : this.state.email,
            password : this.state.password
        })
        
        .then(res => {
            let decoded = jwtDecode(res.data.token)
            console.log(jwtDecode(res.data.token));
            localStorage.setItem('jwt-token', res.data.token);
            localStorage.setItem('id', decoded.user._id)
            localStorage.setItem('isAdmin', decoded.user.isAdmin)

            this.props.history.push(`/profile/${localStorage.getItem('id')}`);
        })
            // localStorage.setItem('jwt-token' , res.data.token))
        // .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    //     const body = JSON.stringify({
    //         email : this.state.email,
    //         password : this.state.password
    //     })
    //     console.log(body);
    //    const login =  fetch('http://localhost:5000/auth/login', {
    //     method:'POST',
    //         headers : {
    //             'Accept' : 'application/json',
    //             'Content-Type' : 'application/json'
    //         },
    //     body : JSON.stringify({
    //         email : this.state.email,
    //         password : this.state.password
    //     })
    // }).then(res => console.log(res))
    // .then(res => {
    //     const userId = res.data._id;
    //         console.log(userId);
    //     console.log(res);
    //     if(res.data.code == 200){
    //         console.log(res.data);
    //     } else {
    //         console.log(res);
    //         this.props.history.push(`/profile/${userId}`);
            
    //     }
        
    // })
    // .catch(err => console.log(err));
    // console.log(login);
    componentWillMount(){
        if(localStorage.getItem('jwt-token')){
            this.props.history.push(`/profile/${localStorage.getItem('id')}`)
        }
    }
    render(){
        console.log();
        const styles = {
       
            main : {
                borderBottom : '1px solid black'
            },
            mainIcon : {
                paddingTop : '12px'
            },
            space : {
                paddingTop : '30px'
            }
            
    }
        return (
          
            <Fragment>
                
                    <div className="container" style={{marginTop:'150px'}}>
                        <div className="row sign-in section-separator">
                            <div className="col-md-5 offset-1">
                            <div className="singin-image">
                                    <img src="./images/signin-image.jpg" alt="singIn Image" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                               <h1>Login</h1><br/>
                               <form>
                                  <div className="input-group" style={styles.main}>
                                  <span><i style={styles.mainIcon} className="fa fa-user"/></span><input  type="email"  onChange={this.email} className="form-control login-input"  placeholder="Your Email" name="email"/>
                                  
                                  </div><br/>
                                  <div className="input-group" style={styles.main}>
                                  <span><i style={styles.mainIcon} className="fa fa-lock"/></span><input  type="password" onChange={this.password} className="form-control login-input"  placeholder="Your Password" name="password"/>
                                  </div>
                                  <div className="input-group" style={styles.space}>
                                      <input  type="button" onClick={this.login} value="Login" className="btn btn-primary"/>
    
                                      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to='/register'><input type="button" value="SignUp" className="btn btn-primary"/></Link> */}
                                  </div>
                               </form>
                            </div>
                        </div>
                    </div>
    
            </Fragment>
        )
    }
}

export default Login;