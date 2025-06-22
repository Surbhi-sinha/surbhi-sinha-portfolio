import React from 'react'

export const HeroSection = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I'm <span className="gradient-text">Surbhi Sinha</span></h1>
                    <h1>Fullstack Developer</h1>
                    <p>I craft beautiful, scalable web applications with modern technologies and a passion for clean code.</p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
                <div className="code-animation">
                    <div className="code-header">
                        <div className="code-dot dot-red"></div>
                        <div className="code-dot dot-yellow"></div>
                        <div className="code-dot dot-green"></div>
                    </div>
                    <div className="code-content">
                        <div className="line">
                            <span className="prompt">$</span>
                            <span className="command">whoami</span>
                        </div>
                        <div className="output">
                            Full-stack developer with 2+ years of experience
                        </div>
                        <div className="line">
                            <span className="prompt">$</span>
                            <span className="command">ls -la skills/</span>
                        </div>
                        <div className="output">
                            drwxr-xr-x  JavaScript
                            <br />
                            drwxr-xr-x  TypeScript
                            <br />
                            drwxr-xr-x  React
                            <br />
                            drwxr-xr-x  Node.js<br />
                            drwxr-xr-x  GraphQL
                        </div>
                        <div className="line">
                            <span className="prompt">$</span>
                            <span className="command">cat about.md</span>
                        </div>
                        <div className="output">
                            I'm a passionate developer who loves creating elegant solutions to complex problems. When I'm not coding, you can find me contributing to open source or learning new technologies.
                        </div>
                        <div className="line">
                            <span className="prompt">$</span>
                            <span className="command typing">npm run start-conversation</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
