import React from 'react';
import axios from 'axios';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectActions: [],
            project: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8500${this.props.match.url}`)
            .then(res => {
                this.setState({
                    projectActions: res.data
                })
            })
            .catch(err => console.log(err));
        const project = this.props.projects.find(project => project.id == this.props.match.params.id)
        this.setState({
            project: project.name
        })
        
    }

    render() {
        return(
            <div>
                <h4>{this.state.project}</h4>
                <h5>Actions,</h5>
                {this.state.projectActions.map(action => 
                    <h6 key={action.id}>Description: {action.description}, Notes: {action.notes}</h6>
                )}
            </div>
        )
    }
}

export default Project; 