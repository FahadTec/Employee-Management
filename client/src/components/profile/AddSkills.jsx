import React, { Component } from 'react';
import axios from 'axios';

class AddSkills extends Component {
    constructor(props){
        super(props);
        this.state={
            skills : []
        }
        this.skills = this.skills.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    skills = (e) => {
        this.setState({
            skills : e.target.value
        })
    }
    handleClick = () => {
        
        axios.get(`http://localhost:5000/api/User/${this.props.skillId}`)
        .then(res => {
            this.setState({
                skill : res.data.skills
            })
            console.log(res.data.skills)
        }).catch(err => console.log(err));
    }
    componentDidMount(){
        this.handleClick()
    }
   
    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            skills : this.state.skills
        }
        console.log(obj);
        axios.put(`http://localhost:5000/api/User/addSkills/${this.props.skillId}`, obj)
        .then(res => console.log(res.data));

        // this.setState({
        //     skill : ''
        // })
    }
    render() {
        console.log('skill props');
        console.log(this.props.skillId);
        const id = this.props.skillId;
        console.log("single id");
        console.log(id)
        // const id = this.props.skillId;
        return (
            <div>
                
                {/* <i className="fa fa-plus"></i> */}


                <div className="modal fade" id="basicExampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Skills</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <div className="md-form mb-5">
                                    <i className="fa fa-laptop prefix grey-text"></i>&nbsp;
                                    <label data-error="wrong" data-success="right"> Enter Skills One By One</label>
                                    <input type="text" id="orangeForm-name" value={this.state.skills} onChange={this.skills} className="form-control validate" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Add changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={this.handleClick} style={{ fontSize: '20px', background: 'none', border: 'none' }} data-toggle="modal" data-target="#basicExampleModal"><i className="fa fa-plus-circle"></i></button>
            </div>
        )
    }
}
export default AddSkills;