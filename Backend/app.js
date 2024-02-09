require('dotenv').config();
const express = require('express');
const cors = require('cors');
const firebase = require('firebase');
const Logger = require('./Logs/Logger');
const sequelizeConfigs = require('./Config/DatabaseConfig');

const PORT = process.env.PORT || 4001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Firebase initialization
const firebaseConfig = require('./Config/FirebaseConfig');
firebase.initializeApp(firebaseConfig);

// Database synchronization
sequelizeConfigs.sync()
    .then(() => {
        app.listen(PORT, () => {
            Logger.info({
                label: 'server',
                message: `Server running on port ${PORT}`
            });
        });
    })
    .catch((err) => {
        Logger.error({
            message: "There was an error in Sequelize",
            error: err
        });
    });
