interface Portfolio {
    main: Main;
    resume: Resume;
    portfolio: Portfolio;
    testimonials: Testimonials;
}

interface Testimonials {
    testimonials: Testimonial[];
}

interface Testimonial {
    text: string;
    user: string;
}

interface Portfolio {
    projects: Project[];
}

interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    url: string;
    cta: string;
}

interface Resume {
    skillmessage: string;
    education: Education[];
    work: Work[];
    skillGroups: SkillGroup[];
}

interface SkillGroup {
    name: string;
    skills: string[];
}

interface Work {
    company: string;
    title: string;
    years: string;
    highlights: string[];
}

interface Education {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}

interface Main {
    name: string;
    occupation: string;
    description: string;
    image: string;
    bio: string[];
    contactmessage: string;
    email: string;
    phone: string;
    address: Address;
    website: string;
    resumedownload: string;
    social: Social[];
}

interface Social {
    name: string;
    url: string;
    className: string;
}

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}
