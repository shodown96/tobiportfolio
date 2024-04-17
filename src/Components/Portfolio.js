import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      // Group projects by category
      const projectsByCategory = {};
      this.props.data.projects.forEach(project => {
        if (!projectsByCategory[project.category]) {
          projectsByCategory[project.category] = [];
        }
        projectsByCategory[project.category].push(project);
      });

      // Generate project sections for each category
      const projectSections = Object.keys(projectsByCategory).map(category => {
        const categoryProjects = projectsByCategory[category].map(project => {
          const projectImage = 'images/portfolio/' + project.image;
          return (
            <div key={project.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a target="_blank" rel="noopener noreferrer" href={project.url} title={project.title}>
                  <img alt={project.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="fa fa-link"></i></div>
                </a>
              </div>
            </div>
          );
        });

        return (
          <div key={category}>
            <h1>{category}</h1>
            <div id={`portfolio-wrapper-${category}`} className="bgrid-thirds s-bgrid-halves cf">
              {categoryProjects}
            </div>
          </div>
        );
      });

      return (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              {projectSections}
            </div>
          </div>
        </section>
      );
    } else {
      return null; // or whatever you want to render when there's no data
    }
  }
}

export default Portfolio;
