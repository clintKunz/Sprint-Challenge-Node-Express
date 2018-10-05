import React from 'react';

const Projects = (props) => {
    return(
        <React.Fragment>
            {props.projects.map(project => 
                <h5 key={project.id}>Title:{project.name}, Description:{project.description}</h5>
            )}
        </React.Fragment>
    )
}

export default Projects;