const Contact = ({ data }: any) => {
   const { name, email, contactmessage, resumedownload, address } = data || {};

   return (
      <section id="contact">
         <div className="row contact-panel">
            <div className="three columns header-col">
               <h1><span>Get In Touch</span></h1>
            </div>
            <div className="nine columns contact-content">
               <h2>Let's work together.</h2>
               <p className="lead">{contactmessage}</p>
               <p className="contact-location">
                  {name}<br />
                  {address.city}, {address.state}, {address.zip}
               </p>
               <div className="contact-actions">
                  <a className="button primary" href={`mailto:${email}?subject=Portfolio inquiry for Tobi Oladimeji`}>
                     <i className="fa fa-envelope"></i>Email Me
                  </a>
                  <a className="button" target="_blank" rel="noopener noreferrer" href={resumedownload}>
                     <i className="fa fa-linkedin"></i>Connect on LinkedIn
                  </a>
               </div>
               <a className="contact-email" href={`mailto:${email}`}>{email}</a>
            </div>
         </div>
      </section>
   );
}

export default Contact;
