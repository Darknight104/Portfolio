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
                    <p>I am a passionate AR/VR developer with a strong focus on creating immersive experiences and interactive technologies. With expertise in Unity, React.js, and WebXR, I design and develop engaging virtual environments and augmented reality applications. My projects range from VR campus navigation to AR business cards, blending creativity with technical precision to deliver innovative solutions.</p>
                    <p>I am always eager to explore the latest advancements in extended reality (XR) and push the boundaries of digital interaction. My goal is to craft experiences that bridge the gap between the real and virtual worlds, making technology more interactive and accessible. Let’s build the future of immersive technology together!</p>
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
                <h1>2+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Events Participated</p>
            </div>
        </div>
    </div>
  )
}
export default About
