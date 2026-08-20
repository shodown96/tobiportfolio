
const About = ({ data }: any) => {
   const { name, image, bio, email, address, resumedownload } = data;

   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={`images/${image}`} alt="Tobi Oladimeji" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <div className="bio">
                  {bio.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
               </div>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{address.city}, {address.state}, {address.zip}</span><br />
                        <a href={`mailto:${email}`}>{email}</a>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a target="_blank" rel="noopener noreferrer" href={resumedownload} className="button">
                           <i className="fa fa-linkedin"></i>View LinkedIn
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
