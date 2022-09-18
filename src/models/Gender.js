import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js';
import {Movie} from './Movie.js'

export const Gender = sequelize.define('genders', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
    
}, {timestamps: false}
);

Gender.hasMany(Movie, { 
    foreignKey: 'idGender',
    sourceKey: 'id'
})

Movie.belongsTo(Gender, { 
    foreignKey: 'idGender',
    targetId: 'id'
})

