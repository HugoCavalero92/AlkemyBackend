import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js';

export const Character = sequelize.define('character', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image : {
        type: DataTypes.STRING
    },
    name : {
        type: DataTypes.STRING
    },
    age : {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    },
    history: {
        type: DataTypes.STRING
    }
    
}, {timestamps: false}
);

