import dotenv from 'dotenv'

import express from 'express'

import adminRoutes from './routes/adminRoutes.js'
import usuariosRoutes from './routes/usuariosRoutes.js'

dotenv.config()

class App {
   constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
   }


    middlewares() {

        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())

    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World!')
        })

        this.app.use('/admin/', adminRoutes)
        this.app.use('/usuarios/', usuariosRoutes)
    }
}

export default new App().app
