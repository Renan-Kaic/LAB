import dotenv from 'dotenv'

import app from './app'

dotenv.config()

const porta = process.env.APP_PORT

app.listen(porta, () => {
    console.log(`\n\nEscultando na porta ${porta}\n\n`)
})
