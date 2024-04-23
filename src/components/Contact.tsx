import { useState } from 'react';

const Contact = ({ data }: any) => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "New Contact Information",
      message: "",
   });

   const [url, setUrl] = useState("");

   const [state, setState] = useState({
      loading: false,
      success: false,
      error: null
   });

   const { error, loading, success } = state;
   const { subject, message } = formData;

   const handleChange = (e: any) => {
      setFormData({
         ...formData,
         [e.target.id]: e.target.value
      });
      setUrl(`mailto:${data.email}?subject=${subject}&body=${message}`);
   }

   const handleSubmit = (e: any) => {
      setState({
         loading: true,
         success: false,
         error: null
      });
      e.preventDefault();
      window.open(url);
      setState({
         loading: false,
         success: false,
         error: null
      });
   }

   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
               <p className="lead">{data?.message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form id="contactForm" name="contactForm" method="post" onSubmit={handleSubmit}>
                  <fieldset>
                     <div>
                        <label htmlFor="name">Name <span className="required">*</span></label>
                        <input type="text" size={35} id="name" name="name" onChange={handleChange} required />
                     </div>
                     <div>
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" size={35} id="email" name="email" onChange={handleChange} required />
                     </div>
                     <div>
                        <label htmlFor="subject">Subject <span className="required">*</span></label>
                        <input type="text" size={35} id="subject" name="subject" onChange={handleChange} required />
                     </div>
                     <div>
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea onChange={handleChange} cols={50} rows={5} id="message" name="message" required></textarea>
                     </div>
                     <div>
                        <button type='submit' className="submit">{loading ? "Sending..." : "Submit"}</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>
               {error && <div id="message-warning">
                  Uh oh, seems we have a problem here. Please try again, if the error persists,
                  please feel free to send an email to <a target="_blank" rel="noopener noreferrer" href={url}>{data.email}</a> directly. Thank you.
               </div>}
               {success &&
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               }
            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Contact Details</h4>
                  <p className="address">
                     {data?.name}<br />
                     <span>{data?.email}</span>
                  </p>
               </div>
               <div className="widget widget_tweets">
               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;
