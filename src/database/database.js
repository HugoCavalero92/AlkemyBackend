import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "moviesDB", 
  NAMEDB, 
  PASSDB, 
  {
    host: "localhost",
    dialect: "mysql",
});
