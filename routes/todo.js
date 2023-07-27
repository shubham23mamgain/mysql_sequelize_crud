const express = require('express');
const { createTask, getAllTasks, getSingleTask, deleteTask, updateTask } = require('../controllers/todo');
const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getSingleTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

module.exports = router;