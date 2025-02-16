require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const sequelize = require('./src/dbs/index');

const PORT = process.env.PORT || 3000;

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

// Định nghĩa route cho API đơn giản
app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello from Backend' });
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
