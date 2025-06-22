'use client'
import React, { useEffect } from 'react';
import { Tailwindsvg } from '@/public/Tailwindsvg';
import { MongoDBsvg } from '@/public/MongoDBsvg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faNodeJs, 
  faJava, 
  faAws, 
  faJs
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';



export const Aboutme = () => {
    useEffect(() => {
        // Or implement the proper reveal on scroll
        const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', reveal);
        reveal(); // Initial check

        return () => window.removeEventListener('scroll', reveal);
    }, []);


    return (
        <div id="about">
            <section  className="section reveal">
                <h2 className="section-title gradient-text">About Me</h2>
                <div className="about-content">
                    <div className="profile-image">
                        <img src="code-review-animate.svg" alt="Alex Chen" />
                    </div>
                    <div>
                        <p>I'm a passionate fullstack developer with 2+ years of experience building web applications that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.</p>
                        <p >When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing my knowledge through technical writing.</p>
                        <div className="skills-grid">
                            <div className="skill-card">
                                <div className="skill-icon"><FontAwesomeIcon icon={faReact} color='#61DAFB' /></div>
                                <div>React</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><FontAwesomeIcon icon={faNodeJs} color='#68A063' /></div>
                                <div>Node.js</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><FontAwesomeIcon icon={faJs} color='yellow'/></div>
                                <div>JavaScript</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon flex justify-center"><Tailwindsvg/></div>
                                <div>Tailwind</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon flex justify-center"><MongoDBsvg/></div>
                                <div>MongoDB</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><FontAwesomeIcon icon={faDatabase} color='#336791' /></div>
                                <div>SQL</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><FontAwesomeIcon icon={faJava} color='#ED8B00' /></div>
                                <div>JAVA</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><FontAwesomeIcon icon={faAws} color='#FF9900' /></div>
                                <div>AWS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
