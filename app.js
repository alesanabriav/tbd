'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import routes from './routes.js';
const app = express();
const jsonParser = bodyParser.json();
const sequelize = new Sequelize('tdb', 'root', 'my-secret-pw', {});

//middlewares
app.use(jsonParser);
app.use(express.static('public'));

routes(app, sequelize);

app.listen(4040);