import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }

        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.email = this.email.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleClick = (id) => {
        console.log(id)
        // e.preventDefault();
        axios.get(`http://localhost:5000/api/User/${id}`)
            .then(res => {
                // console.log('response' + res);
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email
                })
            })
            .catch(err => console.log(err));
    }
    componentDidMount = () => {
        this.handleClick();
    }

    firstName = (e) => {
        this.setState({ firstName: e.target.value })
    }
    lastName = (e) => {
        this.setState({ lastName: e.target.value })
    }
    email = (e) => {
        this.setState({ email: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        axios.patch(`http://localhost:5000/api/User/${this.props.id}`, obj)
            .then(res => console.log(res.data));
            // this.props.history.push('/profile/profile/:user_id')
    }
    render() {
        console.log("props edit")
        const id = this.props.id;
        console.log(id);
        return (
            <div>
                {/* <button classNameNameNameName="btn btn-success ml-lg-2 mt-2">Edit Profile</button> */}
                <br />
                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Edit Profile</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">First Name</label>
                                    <input type="text" id="orangeForm-name" value={this.state.firstName} onChange={this.firstName} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-user prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Last Name</label>
                                    <input type="text" id="orangeForm-name" value={this.state.lastName} onChange={this.lastName} className="form-control validate" />
                                </div>
                                <div className="md-form mb-5">
                                    <i className="fa fa-envelope prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right">Your email</label>
                                    <input type="email" id="orangeForm-email" value={this.state.email} onChange={this.email} className="form-control validate" />
                                </div>

                                {/* <div className="md-form mb-4">
                                    <i className="fa fa-lock prefix grey-text"></i>
                                    <input type="password" id="orangeForm-pass" className="form-control validate" />
                                    <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
                                </div> */}

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <input type="button" onClick={this.onSubmit} className="btn btn-secondary" value="Update" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to={"/edit/" + id} onClick={() => this.handleClick(id)} className="btn btn-success" data-toggle="modal" data-target="#modalRegisterForm">Edit Profile</Link>
                </div>
            </div>
        )
    }
}
export default EditProfile;