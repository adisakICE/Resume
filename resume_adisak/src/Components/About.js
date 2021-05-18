import React from 'react'
const About = () => {
    return (
        <section id="about">
        <div className="row">
           <div className="three columns">
              <img className="profile-pic"  src={'images/profilepic.jpg'} alt="Tim Baker Profile Pic" />
           </div>
           <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>I like to keep up with new technology, iot devices, news, and free time to practice programming. Or fix bugs that have in the job. I am always ready to learn more and more techniques from everyone.</p>
              <div className="row">
                 <div className="columns download">
                    <p>
                      <a href='https://drive.google.com/file/d/1FQ3ywdSELIbbl_zH0WCxv2Y0wdE5T9Z4/view?usp=sharing' className="button"><i className="fa fa-download"></i>Download Resume</a> 
                    </p>
                 </div>
              </div>
           </div>
        </div>
  
     </section>
      );
}

export default About