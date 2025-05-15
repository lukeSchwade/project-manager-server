//Main server Logic
import express from 'express';
import mongoose from 'mongoose'; //unused
import jwt from 'jsonwebtoken';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const {endpoint, port, environment, dbUri} = require( './modules/config');

import bcrypt from 'bcrypt'; //unused move to auth

//
const connectDB = require('./db');

const app = express();



connectDB(dbUri);

let usersRouter = require('./routes/users');
let projectsRouter = require ('./routes/projects');
let tasksRouter = require('./routes/tasks');

//Middleware
app.use(cors());
//Parse incoming requests as JSON obj
app.use(express.json());
//Parses forms submitted with POST request
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('./api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`Server is running on ${endpoint}:${port}`);
});
