import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Actions from './Actions';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8500/actions')
      .then(res => {
        this.setState({
          actions: res.data
        })
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8500/projects')
      .then(res => {
        this.setState({
          projects: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to='/actions'>Actions</Link>
          <Link to='/projects'>Projects</Link>
        </div>
        <Route path='/actions' render={props => (
          <Actions {...props} actions={this.state.actions} />
        )} />
        <Route path='/projects' render={props => (
          <Projects {...props} projects={this.state.projects} />
        )} />
      </div>
    );
  }
}

export default App;
