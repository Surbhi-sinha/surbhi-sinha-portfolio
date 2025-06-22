import React from 'react'
import { EmailIconsvg } from '@/public/EmailIconsvg';
import { RedirectIconsvg } from '@/public/RedirectIconsvg';
import { GithubIconLargesvg } from '@/public/GithubIconLargesvg';
import { LinkedinIconsvg } from '@/public/LinkedinIconsvg';
// import { TwitterIconsvg } from '@/public/TwitterIconsvg';
import {MediumIconsvg} from "@/public/mediumIconsvg"

const connectData = [
    {
        icon: EmailIconsvg,
        title: "Email",
        description: "Preferred for project inquiries and professional opportunities.",
        link: "mailto:astsurbhisinha@gmail.com",
        linkText: "astsurbhisinha@gmail.com"
    },
    {
        icon: GithubIconLargesvg,
        title: "GitHub",
        description: "Check out my repositories, contributions and open source work.",
        link: "https://github.com/Surbhi-sinha",
        linkText: "github.com/Surbhi sinha"
    },
    {
        icon: LinkedinIconsvg,
        title: "LinkedIn",
        description: "Connect professionally and view my experience and skills.",
        link: "https://www.linkedin.com/in/surbhi-sinha-554902176/",
        linkText: "linkedin.com/in/Surbhi Sinha"
    },
    {
        icon: MediumIconsvg,
        title: "Medium",
        description: "Follow me for tech insights, updates on my latest projects.",
        link: "https://medium.com/@astsurbhisinha",
        linkText: "@astsurbhisinha"
    }
];

export const Contactme = () => {
    return (
        <div id='contact'>
            <div className='container'>
                <section className="connect-section">
                    <div className="section-header">
                        <h2 className="section-title">$ connect --with-me</h2>
                        <div className="section-line"></div>
                    </div>

                    <div className="code-animation">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <div className="terminal-button close"></div>
                                <div className="terminal-button minimize"></div>
                                <div className="terminal-button maximize"></div>
                            </div>
                            <div className="terminal-title">surbhi@portfolio ~ /connect</div>
                        </div>
                        <div className="terminal-body">
                            <div className="command-line">
                                <span className="prompt">surbhi@portfolio:~$</span>
                                <span className="command typing-animation">./get-in-touch.sh</span>
                            </div>
                            <div className="response">
                                <p>Initializing connection protocols...</p>
                                <p>Select a communication channel below to establish connection:</p>
                            </div>

                            <div className="connect-grid">
                                {connectData.map((item, index) => (
                                    <div className="connect-card" key={index}>
                                        <div className="connect-card-header">
                                            <item.icon />
                                            <h3 className="connect-title">{item.title}</h3>
                                        </div>
                                        <p className="connect-description">{item.description}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="connect-link">
                                            {item.linkText}
                                            <RedirectIconsvg />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="command-line" >
                                <span className="prompt">surbhi@portfolio:~$</span>
                                <span className="command">echo "Looking forward to connecting with you!"</span>
                            </div>
                            <div className="response">
                                <p>Looking forward to connecting with you!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}