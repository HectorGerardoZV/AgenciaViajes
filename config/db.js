import Sequelize from 'sequelize'
import dontEnv from "dotenv"
dontEnv.config({path: "variables.env"})

 
const db = new Sequelize(process.env.BD_nombre, process.env.BD_user, process.env.BD_password,{
    host: process.env.BD_host,
    port: process.env.BD_port,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{
        max :5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});
 
export default db;

