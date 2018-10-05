import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
    return(
        <React.Fragment>
            {props.projects.map(project => 
                <h5 key={project.id}>Title:<Link to={`/project/${project.id}`}>{project.name}</Link></h5>
            )}
        </React.Fragment>
    )
}

export default Projects;