const dbConfig = require('../config/dbConfig');
const {Sequelize , DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,
        }
    },
)

sequelize.authenticate()
.then(()=> console.log('Connected to DB'))
.catch(err=> console.log("Error",err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require('./todoModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false})  // For syncing models with the database without dropping tables 
.then(()=> console.log('Yes re-sync done'));

module.exports = db;

