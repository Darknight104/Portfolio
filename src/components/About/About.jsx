import React from 'react'
import '../About/About.css'
// import Theme_patter from '../../assets/profile.jpg'
import Profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About ME</h1>
            {/* <img src={Profile} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={Profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a full-stack developer with practical experience in both front-end 
(React) and back-end technologies, and I am currently pursuing my 
degree in computer science.I possess strong skills in Unity for 
developing AR and VR apps. I am passionate about contributing to 
innovative projects, collaborating with teams, and continuously learning 
new technologies. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p>
                    <hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill"> <p>React</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"> <p>Unity</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"> <p>AR/VR</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2</h1>
                <p>Internships</p>
            </div>
        </div>
    </div>
  )
}
export default About
