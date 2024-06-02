const express = require('express');
const cors = require('cors');
const Logger = require('./Log/Logger');
const sequelizeConfigs = require('./Configurations/DatabaseConfig');

// Routes imports
const AuthenticationRouter = require('./Routers/UserRouter')
const BlogsRouter = require('./Routers/BlogRouter')
const ProductRouter = require('./Routers/ProductRouter')
const CommentRouter = require('./Routers/CommentRouter')
const CategoryRouter = require('./Routers/CategoryRouter')

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'))
app.use(express.urlencoded({extended: false}));

// Root Routes
app.use('/auth', AuthenticationRouter) // http://localhost:4000/auth/register, /login, /profile/:id
app.use('/blog', BlogsRouter) // http://localhost:4000/blog/create:id, blogs, /blog/:id, blog/:id/blogs
app.use('/product', ProductRouter)
app.use('/comment', CommentRouter) // http://localhost:4000/comments/blogId
app.use('/category', CategoryRouter)

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
        console.log(err, "error")
        Logger.error({
            message: "There was an error in Sequelize",
            error: err
        });
    });

