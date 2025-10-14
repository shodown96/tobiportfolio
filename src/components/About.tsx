
const About = ({ data }: any) => {
   let { name, image, bio, email, resumeDownload } = data;

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
              <img src="images/headshot.jpg" alt="Tobi Oladimeji Profile Picture" width="140" height="140">
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a target="_blank" rel="noopener noreferrer" href={resumeDownload} className="button">
                           <i className="fa fa-download"></i>Download Resume
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
