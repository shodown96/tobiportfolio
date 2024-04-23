
const Testimonials = ({ data }: any) => {
   const testimonials = data ? data.testimonials.map((testimonial: any) => (
      <li key={testimonial.user}>
         <blockquote>
            <p>{testimonial.text}</p>
            <cite>{testimonial.user}</cite>
         </blockquote>
      </li>
   )) : null;

   return (
      <section id="testimonials" style={{backgroundColor:'red'}}>
         <div className="text-container">
            <div className="row">
               <div className="ten columns flex-container">
                  <ul className="slides">
                     {testimonials}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
