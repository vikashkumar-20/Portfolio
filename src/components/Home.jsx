import React from 'react';
import Button from "./Button";
import { useState, useEffect } from "react";
import './Home.css'
import ProjectCard from './ProjectCard';




const Home = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"; // Get theme from localStorage
    });

    const [rotate, setRotate] = useState(false);



    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme); // Save theme preference
    }, [theme]);


    const toggleTheme = () => {
        setRotate(!rotate);
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className='container'>
            <nav>

                <a href="https://www.vikash.world/">
                    <img src="/images/logo.PNG" className="h-10" />
                </a>

                <div className="navbar-button">

                    <a href="#home">
                        <Button text="HOME" />
                    </a>

                    <a href="#about">
                        <Button text="ABOUT" />
                    </a>
                    <a href="#project">
                        <Button text="PROJECTS" />
                    </a>

                    <a href="#footer">
                        <Button text="CONTACT" />
                    </a>
                </div>
                <button
                    id="nav-favicon"
                    onClick={toggleTheme}
                    style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        transition: "transform 1s fast",  // Apply smooth transition for rotation
                        transform: rotate ? "translateX(15px)" : "translateX(-15px)",  // Rotate on click
                    }}
                >
                    <img
                        src={theme === "dark" ? "/images/moon.svg" : "/images/sun.webp"}
                        alt={theme === "dark" ? "Moon Icon" : "Sun Icon"}
                        style={{
                            height: "40px",
                            width: "40px",
                            borderRadius: "50%",
                            backgroundColor: theme === "dark" ? "white" : "yellow",
                            transition: "background 0.3s ease-in-out",
                        }}
                    />
                </button>
            </nav>


            <header id="about">

                <h3>WELCOME TO VIKASH.WORLD</h3>

                <p>Hi I'm Vikash !
                    <br />"I am a Frontend Developer with experience in web design.
                    I have worked on various projects to enhance my skills and build my own portfolio."
                </p>

            </header>

            <hr />

            <section id="project">

                <h2>Projects</h2>
                <p id="project-para">Check out some of my personal and paid projects</p>

                <div className='project-card'>

                    <ProjectCard
                        Projectname="Project Name :"
                        title="ClipBoard Application"
                        TechnologyUsed="Technology Used :"
                        TechnologyName="HTML, Tailwind, JavaScript, React"
                        img="/images/project-one.png"
                        GitHubRepositoryLink="GitHub Repository Link:"
                        GithubAc="https://github.com/vikashkumar-20/PasteApp"  // Pass GitHub profile link here
                    />

                    <ProjectCard
                        Projectname="Project Name :"
                        title="ClipBoard Application"
                        TechnologyUsed="Technology Used :"
                        TechnologyName="HTML, Tailwind, JavaScript, React"
                        img="/images/project-one.png"
                        GitHubRepositoryLink="GitHub Repository Link:"
                        GithubAc="https://github.com/vikashkumar-20/PasteApp"  // Pass GitHub profile link here
                    />


                    <ProjectCard
                        Projectname="Project Name :"
                        title="ClipBoard Application"
                        TechnologyUsed="Technology Used :"
                        TechnologyName="HTML, Tailwind, JavaScript, React"
                        img="/images/project-one.png"
                        GitHubRepositoryLink="GitHub Repository Link:"
                        GithubAc="https://github.com/vikashkumar-20/PasteApp"  // Pass GitHub profile link here
                    />

                    <ProjectCard
                        Projectname="Project Name :"
                        title="ClipBoard Application"
                        TechnologyUsed="Technology Used :"
                        TechnologyName="HTML, Tailwind, JavaScript, React"
                        img="/images/project-one.png"
                        GitHubRepositoryLink="GitHub Repository Link:"
                        GithubAc="https://github.com/vikashkumar-20/PasteApp"  // Pass GitHub profile link here
                    />


                    <ProjectCard
                        Projectname="Project Name :"
                        title="ClipBoard Application"
                        TechnologyUsed="Technology Used :"
                        TechnologyName="HTML, Tailwind, JavaScript, React"
                        img="/images/project-one.png"
                        GitHubRepositoryLink="GitHub Repository Link:"
                        GithubAc="https://github.com/vikashkumar-20/PasteApp"  // Pass GitHub profile link here
                    />


                    <ProjectCard
                        Projectname="Project Name :"
                        title="ClipBoard Application"
                        TechnologyUsed="Technology Used :"
                        TechnologyName="HTML, Tailwind, JavaScript, React"
                        img="/images/project-one.png"
                        GitHubRepositoryLink="GitHub Repository Link:"
                        GithubAc="https://github.com/vikashkumar-20/PasteApp"
                    />
                </div>

                <Button text="See More" />
            </section>


            <footer id="footer">
                <div id="mail">
                    <a href="mailto:skvikash@mail.com">skvikash@mail.com</a>
                </div>

                <div className="footer-favicon">
                    <a href="https://www.facebook.com/vikash.gupta.16100921" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="/images/facebook-icon.svg" alt="Facebook" />
                    </a>

                    <a href="https://www.linkedin.com/in/vikashkumar20/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
                    </a>

                    <a href="https://www.instagram.com/_vikash.gupta/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src="/images/instagram-icon.avif" alt="Instagram" />
                    </a>
                </div>


                <div>
                    <p>
                        Copyright © Communitypro 2025, All rights reserved
                    </p>
                </div>
            </footer>



        </div>

    )
}

export default Home