import { useEffect, useState } from 'react';
import { makeDistinct } from '../utilities';


const ProjectItem = ({ project }: any) => (
  <div className="columns portfolio-item">
    <div className="item-wrap">
      <a target="_blank" rel="noopener noreferrer" href={project.url} title={project.title}>
        <img alt={`${project.title} project preview`} src={project.image} loading="lazy" />
        <div className="portfolio-item-meta">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
          <span className="project-cta">{project.cta} <i className="fa fa-external-link"></i></span>
        </div>
      </a>
    </div>
  </div>
)

const Portfolio = ({ data }: any) => {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (data) {
      const categories = []
      for (const project of data.projects) {
        categories.push(project.category)
      }
      setCategories(makeDistinct(categories))
      setProjects(data.projects.map((x: any) => ({ ...x, image: `images/portfolio/${x.image}` })))
    }
  }, [data])


  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h1 className="section-heading">Selected Analytics Projects</h1>
        <div id="portfolio-wrapper">
          {categories.length > 0 && categories.map((category, j) => (
            <div className='portfolio-category' key={j}>
              <h2>{category}</h2>
              <div className="portfolio-grid">
                {projects.filter((proj: any) => proj.category === category).map((project: any) => <ProjectItem key={project.title} project={project} />)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
