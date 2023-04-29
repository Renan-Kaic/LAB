import dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import path, { resolve } from 'path'
import delay from 'express-delay'

import homeRoutes from './routes/homeRoutes'
import userRoutes from './routes/userRoutes'
import tokenRoutes from './routes/tokenRoutes'
import alunoRoutes from './routes/alunoRoutes'
import uploadRoutes from './routes/uploadRoutes'
import './database'

dotenv.config()

const whiteLIst = [
    'https://react.labstwo.com.br',
    'http://localhost:3000',
]

const corsOptions = {
    origin(origin, callback) {
        console.log(origin, callback)
        if (whiteLIst.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}

class App {
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(cors(corsOptions))
        this.app.use(helmet())
        this.app.use(delay(2000))
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        this.app.use(express.static(path.resolve(__dirname, 'upload')))
        this.app.use('/images/', express.static(resolve(__dirname, '..', 'upload', 'images')))
    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/users/', userRoutes)
        this.app.use('/tokens/', tokenRoutes)
        this.app.use('/alunos/', alunoRoutes)
        this.app.use('/upload/', uploadRoutes)
    }
}

export default new App().app
