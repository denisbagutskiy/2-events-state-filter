import React from 'react';
import PropTypes from 'prop-types';
import './project-list.css';

export function ProjectList({ projects }) {
    return (
        <div className="project-list">
            {projects.map((project, i) => 
                <img className="fade-in" key={i} src={project.img} alt={project.category}></img>
            )}
        </div>
    );
} 

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }))
};