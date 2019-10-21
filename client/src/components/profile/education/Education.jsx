import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

class Education extends Component {
    state = {
        educations: [],
        error : null
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
        console.log(this.props.education);


        return (
            <div>

                <div className="mh-education">
                    <Animated isVisible={true} animationInDuration={1000} animationInDelay={200} animationIn="fadeInUp">
                        <h3 className="wow fadeInUp">Education</h3>
                    </Animated>
                    <div className="mh-education-details">

                        {
                            this.state.educations.map((education) => {
                                return <div key={education._id}>
                                    {console.log(education.qualifications)}

                                    <Animated isVisible={true} animationInDuration={1000} animationInDelay={300} animationIn="fadeInUp">


                                        {
                                            education.qualifications.map((qualification) => {
                                                return (
                                                    <div key={qualification._id}>
                                                        <div className="mh-education-item dark-bg wow fadeInUp" style={styles}>
                                                            <h4>{qualification.degreeName}</h4>
                                                            <div className="mh-eduyear">{qualification.yearOfPassing}</div>
                                                            <p>{qualification.percentage}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        {
                                            education.certifications.map((certificate) => {
                                                return (
                                                    <div key={certificate._id}>
                                                        <div className="mh-education-item dark-bg wow fadeInUp" style={styles}>
                                                            <h4>{certificate.name}</h4>
                                                            <div className="mh-eduyear">{certificate.issueDate}</div>
                                                            <p>{certificate.location}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Animated>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Education;