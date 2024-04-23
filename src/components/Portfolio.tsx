import { useEffect, useState } from 'react';
import { makeDistinct } from '../utilities';


const ProjectItem = ({ project }: any) => (
  <div className="columns portfolio-item">
    <div className="item-wrap">
      <a target="_blank" rel="noopener noreferrer" href={project.url} title={project.title}>
        <img alt={project.title} src={project.image} style={{ width: 480, height: 280, objectFit: 'cover', overflow: 'hidden' }} />
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
)

const Portfolio = ({ data }: any) => {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (data) {
      const categories = []
      for (let project of data.projects) {
        categories.push(project.category)
      }
      setCategories(makeDistinct(categories))
      setProjects(data.projects.map((x: any) => ({ ...x, image: `images/portfolio/${x.image}` })))
    }
  }, [data])


  return (
    <section id="portfolio">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div id="portfolio-wrapper">
          {categories.length > 0 && categories.map((category, j) => (
            <div className='portfolio-category' style={{ width: '100%' }} key={j}>
              <h1 style={{ color: 'black', fontSize: 20 }}>{category} Projects</h1>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 40,
                margin: "0px auto",
                justifyContent: 'space-between',
                width: '100%'
              }}>
                {projects.filter((proj: any) => proj.category === category).map((project, i) => <ProjectItem key={i} project={project} />)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
