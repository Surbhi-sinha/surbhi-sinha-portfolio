import React from 'react'

const timelineData = [
    {
        year: "2020-2024",
        role: "Bachelor's of Technology in Computer Science",
        company: "Guru Govind Singh Indraprastha University(New Delhi)",
        icon: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
        description: "Began the journey writing clean code, and learning Data structure and algorithm, OOPs, DBMS, Operating system, Computer Networks.",
        skills: ["HTML/CSS", "JavaScript", "Git", "React Basics"]
    },
    {
        year: "April 2023- June 2023",
        role: "Software Developer Intern",
        company: "Microsoft",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
        description: "Worked on the Azure DevOps DevDiv Test Plans Team, providing solutions to enhance test case import/export functionality of Test Plans",
        skills: ["C#", "SQL Management Studio", "telemetry tools","Sass", "Webpack"]
    },
    {
        year: "Jan 2024 - May 2025",
        role: "Software Engineer",
        company: "Grapecity India",
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        description: "Designed highly customizable and scalable enterprise-grade JavaScript solutions, focusing on client-side Excel functionality. Worked on SpreadJS, a leading JavaScript-based spreadsheet solution, to optimize performance in complex web-based environments. ",
        skills: ["Node.js", "MongoDB", "JavaScript (ES6+)"," TypeScript", "ReactJS", "NodeJS","C#"," GitLab", "Visual Studio", "postgreSQL", "mySQL" , "Webpack module Bundler"]
    },
    {
        year: "May 2025 - present",
        role: "FullStack Developer",
        company: "UXMagic.ai",
        icon: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
        description: "Mentored junior developers and architected cloud-native solutions. Led migration of legacy systems to modern tech stack.",
        skills: ["Node.js", "MongoDB"," TypeScript", "ReactJS", "NodeJS", "Visual Studio", "postgreSQL", "mySQL" , "Azure"]
    },
];

export const Journey = () => {
    return (
        <div id='timeline' className='timeline-container'>
            <header>
                <h1 className="gradient-text">Career.timeline()</h1>
                <p className="subtitle">A chronological journey through my development career</p>
            </header>
            <div className="timeline">
                {timelineData.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="year">{item.year}</span>
                            <h3 className="role">{item.role}</h3>
                            <p className="company">
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d={item.icon} />
                                </svg>
                                {item.company}
                            </p>
                            <p className="description">{item.description}</p>
                            <div className="skills">
                                {item.skills.map((skill, skillIndex) => (
                                    <span className="skill-tag" key={skillIndex}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}