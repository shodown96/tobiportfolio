import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';
import "swiper/swiper-bundle.min.css";
import resumeData from './resumeData.json'; // Assuming resumeData.json is in the same directory

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

class Portfolio extends Component {
  render() {
    if (resumeData.portfolio && resumeData.portfolio.projects) {
      const projects = resumeData.portfolio.projects;
      const powerBiProjects = projects
        .filter(project => project.category === 'PowerBI')
        .map(project => this.renderProject(project));

      return (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Hey!! Why Not Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-halves cf">
                <div className="portfolio-category">
                  <h2>PowerBI</h2>
                  <Swiper
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
                    pagination={true}
                    className="mySwiper">
                    {powerBiProjects}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null; // Handle the case when no data is available
    }
  }

  // Helper method to render individual project item
  renderProject(project) {
    const projectImage = 'images/portfolio/' + project.image;
    return (
      <SwiperSlide key={project.title} className="slide" style={{ backgroundImage: `url(${projectImage})` }}>
        <a target="_blank" rel="noopener noreferrer" href={project.url} title={project.title}>
          <img src={projectImage} alt="" />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{project.title}</h5>
              <p>{project.category}</p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    );
  }
}

export default Portfolio;
