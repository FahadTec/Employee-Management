import React, { Component } from 'react';
import Education from './Education.jsx';
import Experience from './Experience.jsx';

class Edu_Exp extends Component {
    constructor(props){
        super(props);
        this.state = {
            exp : this.props.edu_exp,
            edu : this.props.edu_exp
        }
    }
    render() {
        return (
            <div>
                <section className="mh-experince image-bg featured-img-one" id="mh-experience">
            <div className="img-color-overlay">
                <div className="container">
                    <div className="row section-separator">
                    <div className="col-sm-12 col-md-6">
                             <Experience experience = {this.state.exp}/>
                         </div>
                         <div className="col-sm-12 col-md-6">
                             <Education education = {this.state.edu}/>
                         </div>
                         
                    </div>
                    </div>
                    </div>
                    </section>
            </div>
        )
    }
}

export default Edu_Exp;