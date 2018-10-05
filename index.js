const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const port = 8500;

const actionModel = require('./data/helpers/actionModel');
const projectModel = require('./data/helpers/projectModel');

const server = express();

//middleware


//global middleware
server.use(cors());
server.use(express.json());
server.use(helmet());

//Create, POST, insert(obj)
    //Actions
    server.post('/actions', (req, res) => {
        const {project_id, description, notes, completed} = req.body;
        const newAction = {project_id, description, notes, completed};
        actionModel.insert(newAction)
            .then(newActionWithId => {
                res.status(201).json(newActionWithId);
            })
            .catch(() => res.status(500).json({error: "Error creating action"}));
    })
    //Projects
    server.post('/projects', (req, res) => {
        const {name, description, completed} = req.body;
        const newProject = {name, description, completed};
        projectModel.insert(newProject)
            .then(newProjectWithId => {
                res.status(201).json(newProjectWithId);
            })
            .catch(() => res.status(500).json({error: "Error creating project"}));
    })

//Read, GET, get()
    //actions
    server.get('/actions', (req, res) => {
        actionModel.get()
            .then(actions => {
                res.status(200).json(actions);
            })
            .catch(() => res.status(500).json({error: "Error reading actions"}));
    })
    //projects
    server.get('/projects', (req, res) => {
        projectModel.get()
            .then(projects => {
                res.status(200).json(projects);
            })
            .catch(() => res.status(500).json({error: "Error reading projects"}));
    })

//Update, PUT, update(id, obj)

//Delete, DELETE, remove(id)
    //actions
    server.delete('/action/:id', (req, res) => {
        const id = req.params.id;
        actionModel.remove(id)
            .then(numberOfDeletedActions => {
                res.status(200).json(numberOfDeletedActions);
            })
            .catch(() => res.status(500).json({error: "Error deleting action"}));
    })
    //projects
    server.delete('/project/:id', (req, res) => {
        const id = req.params.id;
        projectModel.remove(id)
            .then(numberOfDeletedProjects => {
                res.status(200).json(numberOfDeletedProjects);
            })
            .catch(() => res.status(500).json({error: "Error deleting project"}));
    })

//getProjectActions(id) -> returns list of all actions for a project


server.listen(port, () => console.log(`\n-->Listening to port:${port}<--\n`));