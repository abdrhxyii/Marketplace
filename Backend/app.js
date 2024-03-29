require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Logger = require('./Logs/Logger');
const sequelizeConfigs = require('./Config/DatabaseConfig');

// Routes imports
const AuthenticationRouter = require('./Routers/Auth')
const StoreRouter = require('./Routers/Store')
const BlogsRouter = require('./Routers/Blog')
const ProductRouter = require('./Routers/Product')

const PORT = process.env.PORT || 4001;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'))
app.use(express.urlencoded({extended: false}));

// Root Routes
app.use('/auth', AuthenticationRouter) // http://localhost:4000/auth/register, /login, /profile/:id
app.use('/stores', StoreRouter) // http://localhost:4000/stores/createStore/userId/store
app.use('/blog', BlogsRouter) // http://localhost:4000/blog/create:id, blogs, /blog/:id, blog/:id/blogs
app.use('/product', ProductRouter)

// Database synchronization
sequelizeConfigs.sync({
        alter: false,
        force: false
    })
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
