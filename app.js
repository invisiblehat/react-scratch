/**
 * app.js
 */
import path from 'path';
import express from 'express';
import routes from './routes';

// Express app setup
const app = express();

// view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// app.use() to mount our routes to the root path of the application.
app.use('/', routes);

export default app;
