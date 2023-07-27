const db = require('../models');

const Task = db.tasks;

// Create a Task with completed field optional
const createTask = async(req,res)=> {

   try{
    const {task_name, completed } = req.body;
    
    if(task_name.trim() == '' ) return res.json({ message:"Task is a required field", success: false})
    const info ={
        task_name : task_name.trim(),
        completed : completed ? completed : false
    }

    const newTodo = await Task.create(info);

    res.status(201).json(newTodo);
   }catch(error){
    return res.status(500).json({ error: error.message});
   }
};

// Get All Todos

const getAllTasks = async ( req, res )=> {
    try{
        const tasks = await Task.findAll();

        if(tasks.length === 0) return res.json({ message: "No Tasks Found In the database"});
    
        res.status(200).json({success: true, tasks });
    }catch(error){
        return res.status(500).json({ error: error.message});
    }
   
}

// Fetch Single Task

const getSingleTask = async ( req, res )=> {
   try{
        const id = req.params.id;
        const task = await Task.findOne({ where : { id: id } });
        // console.log(task);
        if(!task) return res.json({ message: "No Task Found with the given ID"});

        res.status(200).json({success: true, task});
   }catch(error){
    return res.status(500).json({ error: error.message});
   }
}

// Update Task

const updateTask = async ( req, res )=> {
    try{
         const id = req.params.id; 
         let { completed } = req.body;
          
         const task = await Task.findOne({ where : { id: id } });

         if(!task) return res.json({ message: "No Task Found with the given ID"});

        task.completed = completed;

        await task.save();
        return res.status(200).json({success: true, task});
 
         
    }catch(error){
     return res.status(500).json({ error: error.message});
    }
 }

 // Delete Task

 const deleteTask = async ( req, res )=> {
    try{
         const id = req.params.id;
         const task = await Task.findOne({ where : { id: id } });
         if(!task) return res.json({ message: "No Task Found with the given ID"});

         await Task.destroy({ where : { id : id }});
         res.status(200).json({success: true, message:"Task deleted successfully"});
    }catch(error){
     return res.status(500).json({ error: error.message});
    }
 }

module.exports = { createTask , getAllTasks , getSingleTask , deleteTask , updateTask };