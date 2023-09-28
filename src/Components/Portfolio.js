import React, { Component } from 'react';
// import SwiperCore, { EffectCoverflow,Pagination, Autoplay } from 'swiper/core';
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
// SwiperCore.use([EffectCoverflow,Pagination, Autoplay]);

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a target="_blank" rel="noopener noreferrer" href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    // if(this.props.data){
    //   var projects = this.props.data.projects.map(function(projects){
    //     var projectImage = 'images/portfolio/'+projects.image;
    //     return <div className="portfolio-item">
    //       <SwiperSlide className="slide" key={projects.title} style={{backgroundImage:`url(${projectImage})`}}> 
    //           <a target="_blank" rel="noopener noreferrer" href={projects.url} title={projects.title}>
    //           <img src={projectImage} alt=""/>
    //           </a>
    //           <div className="overlay">
    //             <div className="portfolio-item-meta">
    //             <h5>{projects.title}</h5>
    //                 <p>{projects.category}</p>
    //             </div>
    //           </div>
    //       </SwiperSlide>
    //       </div>
    //   })
    // }
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Hey!! Why Not Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
                {projects}
            </div>

            <div>
              {/* <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  "rotate": 50,
                  "stretch": 0,
                  "depth": 100,
                  "modifier": 1,
                  "slideShadows": true,
                  "shadow": true,
                  "shadowOffset": 20,
                  "shadowScale": 0.94
                }} 
              autoplay={{
                "delay": 10000,
                "disableOnInteraction": false
              }}
              pagination={true} className="mySwiper">
                {projects}
              </Swiper> */}

            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
