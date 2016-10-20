'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
const app = express();
const jsonParser = bodyParser.json();

//middlewares
app.use(jsonParser);
app.use(express.static('public'));

routes(app);

app.listen(4040);