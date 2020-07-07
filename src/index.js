const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const systemRoutes = require('./frameworks/web/routes');
const router = express.Router();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());

app.use('/api/v1', systemRoutes({ router }));

app.listen(PORT, console.log(`Server listening on: ${ PORT }`));