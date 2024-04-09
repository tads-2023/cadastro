const express = require("express");
const MongoMemoryServer  = require("mongodb-memory-server").MongoMemoryServer ;
const mongoose = require("mongoose");
const Todo = require("./modelos/todo");
var cors = require('cors')

const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(`${mongod.getUri()}criar-algo`);

    const express = require("express");
    const app = express();
    
    app.use(cors())
    app.use(express.json())

    app.get("/tarefas", async (req, res) => {
        const tarefas = await Todo.find({});
        res.send(tarefas);
    })

    app.post("/tarefas", (req, res) => {
        const {
            aFazer,
            feito
        } = req.body;

        console.log("A fazer", req.body);
        const tarefa = new Todo({aFazer: aFazer});
        tarefa.save();
        res.send(tarefa);
    })

    app.listen(3000);
}

setup();