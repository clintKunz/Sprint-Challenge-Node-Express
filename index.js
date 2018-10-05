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

//Update, PUT, update(id, obj)

//Delete, DELETE, remove(id)

//getProjectActions(id) -> returns list of all actions for a project


server.listen(port, () => console.log(`\n-->Listening to port:${port}<--\n`));