import express from "express";
import cors from 'cors'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json({}))
app.use(express.urlencoded({extended: true}))

// import frontend
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'frontend')))

// import routers
import fileRouter from './routes/file.routes.js'

// routes
app.use('/api', fileRouter)

export {app}