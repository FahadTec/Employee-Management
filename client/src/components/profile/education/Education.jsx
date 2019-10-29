import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import AddEducation from './AddEducation.jsx';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            educations: []
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.state.educations !== newProps.education) {
            this.setState({ educations: newProps.education })
        }
    }

    render() {
        var styles = {
            padding: '26px 30px',
            marginBottom: '30px'
        }
        console.log("education update");
        console.log(this.state.educations);
        const result = this.state.educations;
        console.log(result);

        return (
            <div>

                <div className="mh-education">
                    <Animated isVisible={true} animationInDuration={1000} animationInDelay={200} animationIn="fadeInUp">
                        <h3 className="wow fadeInUp">Education</h3>
                    </Animated>
                    <div className="mh-education-details">

                        

                                    <Animated isVisible={true} animationInDuration={1000} animationInDelay={300} animationIn="fadeInUp">


                                        {   
                                            result.qualifications !== undefined ?
                                            result.qualifications.map((qualification) => {
                                                return (
                                                    <div key={qualification._id}>
                                                        <div className="mh-education-item dark-bg wow fadeInUp" style={styles}>
                                                            <h4>Degree Name : <span className="mh-eduyear">{qualification.degreeName}</span></h4>
                                                            <p>Year Of Passing : <span className="mh-eduyear">{qualification.yearOfPassing}</span></p>
                                                            <p><b>University : </b> <span className="mh-eduyear">{qualification.instituteName}</span></p>
                                                            <p>Percentage : <span className="mh-eduyear">{qualification.percentage} %</span></p>
                                                            <p><b>CGPA : </b> <span className="mh-eduyear">{qualification.cgpa}</span></p>
                                                        </div>
                                                    </div>
                                                )
                                            }) : <p>{"Add Qualifications"}</p>
                                        }

                                        {
                                            result.certifications !==undefined ?
                                            result.certifications.map((certificate) => {
                                                return (
                                                    <div key={certificate._id}>
                                                        <div className="mh-education-item dark-bg wow fadeInUp" style={styles}>
                                                            <h4>{certificate.name}</h4>
                                                            <div className="mh-eduyear">{certificate.issueDate}</div>
                                                            <p>{certificate.location}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }) : <p>{"Add Certifications"}</p>
                                        }
                                    </Animated>
                               <AddEducation AddEducation={this.state.educations}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;