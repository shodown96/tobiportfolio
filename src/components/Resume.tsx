
const Resume = ({ data }: any) => {
  const { skillmessage, education, work, skillGroups } = data || {};

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
      <ul className="work-highlights">
        {job.highlights.map((highlight: string) => <li key={highlight}>{highlight}</li>)}
      </ul>
    </div>
  )) : null;

  const skillItems = skillGroups ? skillGroups.map((group: any) => (
    <div className="skill-group" key={group.name}>
      <h3>{group.name}</h3>
      <div className="skill-badges">
        {group.skills.map((skill: string) => <span className="badge" key={skill}>{skill}</span>)}
      </div>
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
          <h1><span>Experience</span></h1>
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
          <div className="skill-groups">{skillItems}</div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
