module.exports = {
    HOST:"localhost",
    USER:"shubham",
    PASSWORD:"15Cse23@123",
    DB:"todo_node_sequelize_db",
    dialect:"mysql",

    pool:{
        max:5,
        min:0,
        idle:10000,
        acquire:30000
    }
    
};