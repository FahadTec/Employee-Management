import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Animated} from 'react-animated-css';
import axios from 'axios';
// import EditProfile from './EditProfile.jsx';

class Developers extends Component {
    state = {
        users : []
    }

    componentDidMount(){
        
        fetch('http://localhost:5000/Users')
        .then(res => res.json())
        .then(data => this.setState({
            users: data
        }))
        
    }
    handleDelete = (_id) => {
        console.log(_id)
        axios.delete(`http://localhost:5000/Users/deleteProfile/${_id}`, {
            headers : {
                'x-auth-token' : localStorage.getItem('jwt-token'),
                'content-Type' : 'application/json'
            }
        })
        .then(res => {
            const users = res.data;
            console.log(users)
        }).catch(err => console.log(err));
        window.location.reload();
       
    }
    componentWillMount(){
        if(!localStorage.getItem('jwt-token')){
            this.props.history.push('/')
        }
    }
    render() {
        // console.log(_id)
        // console.log(this.state.users);
        const styles = {
           container : {
            padding: '30px',
            boxShadow : '3px 3px 4px 2px grey',
            height : 'auto',
            marginBottom : '20px'
           },
           image : {
               width:'50%'
           }
        }
        return (
            <Fragment>
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-md-12">
                        <Animated isVisible={true} animationInDuration={800} animationInDelay={600} animationIn="fadeInUp">
                            { 
                            this.state.users.length == null ? <div><h1 className="text-center">Developers List is Empty</h1></div> : 
                                this.state.users.map((user) => {
                                    const {_id} = user;
                                    console.log(_id);
                                    return(
                                        <div className=" wow fadeInUp" style={styles.container} key={user._id}>
                       
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4">
                                                <img style={styles.image} src="./images/hero.png" alt="Profile Picture" className="img-fluid" /><br/>
                                                <Link to={`/profile/${user._id}`}><button className="btn btn-primary ml-lg-2 mt-2">View Profile</button></Link>
                                                </div>
                                                <div className="col-md-4">
                                                    <h4>{user.firstName} {user.lastName}</h4>
                                                    <p>{user.email}</p>
                                                </div>
                                                <div className="col-md-4">
                                                 {/* <EditProfile/><br/> */}
                                                {
                                                  localStorage.getItem('isAdmin') == 'true' ? <button onClick={() => this.handleDelete(user._id)} className="btn btn-secondary ml-lg-2 mt-2">Delete Profile</button> : null
                                                }
                                                </div>
                                            </div>
                                        </div>
                                                                      
                                         </div>
                                    )
                                })
                                
                            }
                        </Animated>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Developers;