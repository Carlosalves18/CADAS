import { DataTypes } from "sequelize"
import conn from "../config/conn.js"

const Cadas = conn.define('cadastrodeatendimento', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        validate: {
            isUUID: 4,
        }
    }, 
    sagentCabo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equipe: {
        type: DataTypes.TEXT
    },
    cocluido: {
        type: DataTypes.TEXT
    },
    solucaoAplic: {
        type: DataTypes.TEXT
    }
}, 
{
    tableName: "cadastrodeatendimento"
})

export default Cadas