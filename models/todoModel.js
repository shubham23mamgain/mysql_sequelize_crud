module.exports = (sequelize, DataTypes)=> {
    const Task = sequelize.define('tasks',{
        task_name:{
            type: DataTypes.STRING,
            allowFalse: null,
            required:true,
        },
        completed:{
            type: DataTypes.BOOLEAN,
        }
    }) 

    return Task;
}