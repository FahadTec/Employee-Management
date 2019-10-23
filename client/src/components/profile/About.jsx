import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import AddSkills from './AddSkills.jsx';


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            about : []
        }
    }
    componentWillReceiveProps(newProps){
        if(this.state.about !== newProps.about){
            this.setState({about : newProps.about})
        }
    }

    // componentDidMount(){
    //     const about = this.state.about;
    //     const obj =  {
    //         about
    //     };
    //     console.log(obj);
    //     const skills = Object.keys(obj).map(key => ({
    //         ...obj[key],
    //         id: key
    //     }))
    //     console.log("skills")
    //     console.log(skills);

    //     this.setState({
    //       about : skills
    //     })
    // }
    // static propTypes = {
    //     about : PropTypes.string
    // }
    // static defaultProps = {
    //     about : ''
    // }

    // renderSkills(about){
    //     let skills=[]

    //     for(let index in about.skills){
    //         skills.push(
    //         <div>
    //              <li style={{float:'left'}}><span>{about.skills[index]}</span></li>
    //         </div>
    //         )
    //     }
    //     return skills
    // }

    // renderSkill(){
    //     return Object.values(this.props.about).map(skills => {
    //         <div>{Object.values(skills)}</div>
    //     })
    // }
    // renderSkill(){
    //     const about = this.state.about;
    //     const obj =  {
    //         about
    //     };
    //     console.log(obj);
    //      Object.keys(obj).map(key => ({
    //         ...obj[key],
    //         id: key
    //     }))
    //     console.log("skills")
    //     // console.log(skill[0].skills);
       
        
    // }
    render() {

        // console.log("props",this.props)

        // const about = this.props.about;
        // const employee = this.props.about;
        console.log('about props state new');
        // const skills = Object.keys(this.state.about);
        // console.log(skills);
        // console.log(skill)
        // console.log(this.renderSkill);
        // const about = this.state.about;
        //     const obj =  {
        //         about
        //     };
        //     console.log(obj);
        //     const skill = Object.keys(obj).map(key => ({
        //         ...obj[key],
        //         id: key
        //     }))
        //     console.log("skills")

        const skillResults = Object.keys(this.state.about).map(key => 
            
                <div><li key={key}><span>{this.state.about[key]}</span></li></div> 
            )

            console.log('results ' + skillResults);

            // const item =  skill[0].skills.map((item) => {
            //     return(
            //      <div>
            //      <li><span>{item}</span></li>
            //       </div>
            //     )
            // })

            // console.log(item)
            // console.log(skill[0].skills);
        // const skillMap = skills.map((skill) => {
        //     return (
        //         <div key={skill}>
        //             {console.log(skill)}
                   
        //         </div>
        //     )
        // })
        // console.log(skillMap);
        // const obj = {
        //     "5bd4a1a4-f806-4355-bf34-1b4054c2881e": {
        //       "type": "tosca.resourceTypes.TPE",
        //       "label": "BVI 610",
        //       "value": "801070217_BVI610"
        //     }
        //   };
          
        //   const result = Object.keys(obj).map(key => ({
        //     ...obj[key],
        //     id: key
        //   }));
          
        //   console.log(result);

    //     const skillsMap = skills[1].map((skill) => {
    //         return  <li><span>{skill}</span></li>
    //     })
    //    console.log(skillsMap);
        // console.log(this.props.about);
        // const about = this.props.about;
        // console.log(about);
        // const result = Object.keys(about).map((skills,key) => {
        //     return(
        //         <div key={key}>
        //             <li><span>{about[skills].name}</span></li>
        //         </div>
        //     )
        // });
        // console.log(result);
        // console.log("renderValues" + this.renderSkill());

        // const obj = about;
        // const skill = Object.keys(obj).map(skills => ({
        //     ...obj[skills.skills],
        //     id: skills
        // }));
        // console.log("new method" + skill);
        return (
            <div>
                <section className="mh-about" id="mh-about">
                    <div className="container">
                        <div className="row section-separator">
                            <div className="col-sm-12 col-md-6">
                                <Animated isVisible={true} animationInDuration={800} animationInDelay={400} animationIn="fadeInUp">
                                    <div className="mh-about-img shadow-2 wow fadeInUp">
                                        <img src="../images/ab-img.png" alt="About image" className="img-fluid"/>
                                    </div>
                                </Animated>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="mh-about-inner">
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={100} animationIn="fadeInUp">
                                        <h2 className="wow fadeInUp" >Skills</h2>
                                    </Animated>
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={200} animationIn="fadeInUp">
                                        <p className="wow fadeInUp">Hello, I’m a Patrick, web-developer based on Paris.
                                         I have rich experience in web site design &amp; building
                            and customization. Also I am good at</p>
                                    </Animated>
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={300} animationIn="fadeInUp">

                                        <div className="mh-about-tag wow fadeInUp">
                                            <ul>
                                                {
                                                  skillResults[1]
                                                }
                                                
                                            </ul>
                                        </div> 
                                    </Animated>
                                    <AddSkills skillId={this.props.skill}/>
                                    <Animated isVisible={true} animationInDuration={800} animationInDelay={400} animationIn="fadeInUp">
                                    <br/><br/> <a href="#" className="btn btn-fill wow fadeInUp">Download CV <i className="fa fa-download"></i></a>
                                    </Animated>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;