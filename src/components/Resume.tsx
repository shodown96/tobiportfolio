
const Resume = ({ data }: any) => {
  const { skillmessage, education, work, skills } = data || {};

  const educationItems = education ? education.map((edu: any) => (
    <div key={edu.school}>
      <h3>{edu.school}</h3>
      <p className="info">
        {edu.degree} <span>&bull;</span><em className="date">{edu.graduated}</em>
      </p>
      <p>{edu.description}</p>
    </div>
  )) : null;

  const workItems = work ? work.map((job: any) => (
    <div key={job.company}>
      <h3>{job.company}</h3>
      <p className="info">
        {job.title} <span>&bull;</span> <em className="date">{job.years}</em>
      </p>
      <p>{job.description}</p>
    </div>
  )) : null;

  const skillItems = skills ? skills.map((skill: any) => (
    <div className="badge" key={skill.name}>
      <strong>{skill.name}</strong>
    </div>
  )) : null;

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {educationItems}
            </div>
          </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {workItems}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{skillmessage}</p>
          <div className="bars">
            <ul className="skills">
              {skillItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
