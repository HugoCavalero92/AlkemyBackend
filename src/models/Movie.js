import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js';
import {Character} from './Character.js'

export const Movie = sequelize.define('movies', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    image: {
        type: DataTypes.STRING
    },
    title : {
        type: DataTypes.STRING
    },
    dateCreation : {
        type: DataTypes.DATE
    },
    calification: {
        type: DataTypes.INTEGER
    }   
}, {timestamps: false}
)


Movie.hasMany(Character, { 
    foreignKey: 'idMovie',
    sourceKey: 'id'
})

Character.belongsTo(Movie, { 
    foreignKey: 'idMovie',
    targetId: 'id'
})