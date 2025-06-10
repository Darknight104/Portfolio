import React, { useState } from 'react';
import './Mywork.css'; // You can use similar CSS as Services.css
import myproject from '../../assets/myproject';
import { Link } from "react-scroll";

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    // eslint-disable-next-line no-unused-vars
    const toggleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const handleImageClick = (githubLink) => {
        window.open(githubLink, '_blank');
    };

    return (
        <div id='work' className='Projects'>
            <div className="projects-title">
                <h1>My Projects</h1>
            </div>
            <div className='Projects-container'>
                {myproject.map((project, index) => (
                    <div key={index} className="projects-format">
                        <h3>{project.w_no}</h3>
                        <div 
                            className="project-image-container"
                            onClick={() => handleImageClick(project.w_github)}
                        >
                            <img 
                                src={project.w_image} 
                                alt={project.w_name}
                                className="project-image"
                            />
                            <div className="github-overlay">
                                <span>View on GitHub</span>
                            </div>
                        </div>
                        <h2 className="project-name">
                            {project.w_name}
                        </h2>
                        <div className="project-actions">
                            <button 
                                onClick={() => handleImageClick(project.w_github)}
                                className="github-button"
                            >
                                View Repository
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;