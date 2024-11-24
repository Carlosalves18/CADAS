import { Sequelize } from "sequelize"

const sequelize = new Sequelize('cadas', 'root', 'c@Dev77!.', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize