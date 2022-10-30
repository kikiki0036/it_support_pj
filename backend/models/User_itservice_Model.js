import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('user_account',{
    id_emp:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name_emp:{
        type: DataTypes.STRING
    },
    name_emp_eng:{
        type: DataTypes.STRING
    },
    gender:{
        type: DataTypes.STRING
    },
    level_emp:{
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    },
    role_id:{
        type: DataTypes.STRING
    },
},{
    freezeTableName:true
});

export default Users;