const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    aFazer: String,
    feito: Boolean 
});

const Todo = mongoose.model("Todos", todoSchema);

module.exports = Todo;