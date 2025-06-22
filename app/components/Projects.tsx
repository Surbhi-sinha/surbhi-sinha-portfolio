import React from 'react';
import { GithubIconsvg } from '@/public/GithubIconsvg';
import { LiveLinkIcon } from '@/public/LiveLinkIcon';
let projects = [
    // {
    //     imageURL: "", // add image if available
    //     title: "Kam Lead Management System",
    //     description: "Lead management platform with user interaction and task handling through React and Node.js.",
    //     stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Docker"],
    //     gitURL: "https://github.com/Surbhi-sinha/KAM_LEAD_MANAGEMENT_UI",
    //     liveURL: ""
    // },
    {
        imageURL: "/carstudio.gif",
        title: "The CarStudio",
        description: "3D car customization platform using .glb files and a rich interactive UI.",
        stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Bootstrap"],
        gitURL: "https://github.com/Surbhi-sinha/TheCarStudio",
        liveURL: "https://the-car-studio.vercel.app/"
    },
    {
        imageURL: "/neuralNotes.png",
        title: "NeuraNotes",
        description: "AI-enhanced notes app with CRUD, canvas UI, and MongoDB backend.",
        stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Bootstrap", "MongoDB"],
        gitURL: "https://github.com/Surbhi-sinha/NeuraNotes",
        liveURL: "https://neura-notes-ashen.vercel.app/"
    },
    {
        imageURL: "/secretsanta.gif",
        title: "Secret Santa",
        description: "Secret gift exchange system with custom rules and historical constraints.",
        stack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Bootstrap"],
        gitURL: "https://github.com/Surbhi-sinha/Secret-Santa-frontend",
        liveURL: "https://secret-santa-frontend-self.vercel.app/"
    },
    {
        imageURL: "/taskbuddy.png",
        title: "Task Buddy",
        description: "Task management app for organizing personal and team tasks with Firebase Auth.",
        stack: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Firebase"],
        gitURL: "https://github.com/Surbhi-sinha/Task-Buddy",
        liveURL: "https://taskbuddy-psi.vercel.app/"
    },
    {
        imageURL: "/multilingualFaq.png",
        title: "Multilingual FAQ System",
        description: "FAQ system with multilingual support using Redis and Google Translate API.",
        stack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Docker"],
        gitURL: "https://github.com/Surbhi-sinha/Multilingual_FAQ_system_UI",
        liveURL: ""
    },
    {
        imageURL: "/calc.gif",
        title: "Desktop Calculator",
        description: "Windows calculator with C# and .NET supporting advanced features like theme and keyboard shortcuts.",
        stack: ["C#", ".NET", ".NET CORE", "WinForms"],
        gitURL: "https://github.com/Surbhi-sinha/desktop_calculator",
        liveURL: ""
    },
];

export const Projects = () => {
    return (
        <div id="projects">
            <section className="section reveal">
                <h2 className="section-title gradient-text">Featured Projects</h2>
                <div className="projects-grid">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* ...cards... */}
                        {projects.map((project, index) => (
                            <div className="project-card" key={index}>
                                <div className="project-image">
                                    <img src={project.imageURL} alt="" className='h-full w-full object-cover'/>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className='project-footer'>
                                        <div className="tech-stack">
                                            {project.stack.map((tech, techIndex) => (
                                                <span className="tech-tag" key={techIndex}>{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            <a href={project.gitURL} className="project-link">
                                                <GithubIconsvg />
                                            </a>
                                            <a href={project.liveURL} className="project-link">
                                                <LiveLinkIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}