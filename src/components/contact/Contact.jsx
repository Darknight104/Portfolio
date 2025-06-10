/* eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css'
import profile from '../../assets/profile.jpg'
import mailicon from '../../assets/icons/emailicon.svg'
import location from '../../assets/icons/location.svg'
import callicon from '../../assets/icons/callicon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "55d2d3eb-4ace-4b26-b324-b5c503608bf7");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message)
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div id='contact' className='contact'>
<div className="contact-title">
    <h1>Get in touch</h1>
    {/* <img src={profile} alt="" /> */}
</div>
<div className="contact-section">
    <div className="contact-left">
        <h1>Let's talk</h1>
        <p>Hi, I am Harihara sudhan frontend developer and arvr developer</p>
        <div className="contact-details">
            <div className="contact-detail">
            <img src={mailicon} alt="" /><p>lingamm652@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={callicon} alt="" /><p>6380816379</p>
            </div>
            <div className="contact-detail">
            <img src={location} alt="" /><p>Tiruneveli Tamilnadu</p>
            </div>
        </div>
    </div>
    <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor=""> Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email"  placeholder='Enter your email' name='email'/>
        <label htmlFor="">Write Your Message</label>
        <textarea name="message" rows="8" id="" placeholder='Enter Your Message'></textarea>
        <button className='contact-submit' type='submit'>Submit Now</button>
    </form>
</div>      
    </div>
  )
}

export default Contact