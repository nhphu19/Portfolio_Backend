require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const sequelize = require('./src/dbs/index');
const routes = require('./src/routes');

const PORT = process.env.PORT || 3000;
const BASE_URL = '/api/v1/developer-tmdb';

const app = express();
app.use(morgan('combined'));
app.use(helmet());
app.use(
    compression({
        level: 6,
        threshold: 100 * 1000,
        filter: (req, res) => {
            if (req.headers['x-no-compress']) {
                return false;
            }
            return compression.filter(req, res);
        },
    }),
);
app.use(cors());
app.use(express.json());

// router
app.use(`${BASE_URL}`, routes);

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
