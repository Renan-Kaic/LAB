// eslint-disable-next-line import/no-import-module-exports
import bcrypt from 'bcrypt'

/** @type {import('sequelize-cli').Migration} */
module.exports = {

    async up(queryInterface) {
        await queryInterface.bulkInsert('users', [{

            nome: 'Maria',
            email: 'maria@gmail.com',
            password_hash: await bcrypt.hash('abc12345', 8),
            created_at: new Date(),
            updated_at: new Date(),
        }], {});
    },

    async down() {
        // await queryInterface.bulkDelete('People', null, {});
    },
};
