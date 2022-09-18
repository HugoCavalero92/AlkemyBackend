import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import moviesRoute from './routes/movies.routes.js'
import charactersRoute from './routes/characters.routes.js'
import gendersRoute from './routes/genders.routes.js'
import usersRoute from './routes/users.routes.js'
import loginRoute from './routes/login.routes.js'
import registerRoute from './routes/register.routes.js'

const app = express()

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(moviesRoute)
app.use(charactersRoute)
app.use(gendersRoute)
app.use(usersRoute)
app.use(loginRoute)
app.use(registerRoute)


export default app;




