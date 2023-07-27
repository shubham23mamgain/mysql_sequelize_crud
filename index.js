const express = require('express');
const app = express();
const dotenv = require('dotenv');
const todoRouter = require('./routes/todo');
const morgan = require('morgan');
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/tasks', todoRouter);
const port = process.env.PORT || 8080;
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`);
})
