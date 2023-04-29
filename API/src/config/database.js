require('dotenv').config()

module.exports = {
    dialect: 'mariadb',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    username: process.env.DATABASE_USER,
    database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',

    },
    dialectOption: {
        timezone: 'America/Sao_Paulo',
    },
    timezone: 'timezone: America/Sao_Paulo',
}
