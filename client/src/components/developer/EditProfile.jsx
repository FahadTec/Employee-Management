import React, {Component } from 'react';

class EditProfile extends Component{
    render(){
        return(
            <div>
                {/* <button classNameName="btn btn-success ml-lg-2 mt-2">Edit Profile</button> */}
                <br/>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter">
                   Edit Profile
                   </button>


<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
export default EditProfile;