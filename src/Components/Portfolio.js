import React, { Fragment, useEffect, useState } from 'react';

function makeDistinct(array) {
  const seen = new Set();
  return array.filter(value => {
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
}


const ProjectItem = ({ project }) => (
  <div className="columns portfolio-item" style={{ maxWidth: "450px" }}>
    <div className="item-wrap">
      <a target="_blank" rel="noopener noreferrer" href={project.url} title={project.title}>
        <img alt={project.title} src={project.image} />
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{project.title}</h5>
            <p>{project.category}</p>
          </div>
        </div>
        <div className="link-icon"><i className="fa fa-link"></i></div>
      </a>
    </div>
  </div>
)

const Portfolio = ({ data }) => {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (data) {
      const categories = []
      for (let project of data.projects) {
        categories.push(project.category)
      }
      setCategories(makeDistinct(categories))
      setProjects(data.projects.map(x => ({ ...x, image: `images/portfolio/${x.image}` })))
    }
  }, [data])


  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          {/* <h1></h1> */}
          <div id="portfolio-wrapper">
            {categories.length > 0 ? (
              <Fragment>
                {categories.map(category => (
                  <div className='portfolio-category'>
                    <h1 style={{ color: 'black', fontSize: 20 }}>{category} Projects</h1>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 20,
                      justifyItems: 'spcae-between',
                      alignItems: 'center'
                    }}>
                      {projects.filter(proj => proj.category === category).map((project, i) => <ProjectItem key={i} project={project} />)}
                    </div>
                  </div>
                ))}
              </Fragment>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
