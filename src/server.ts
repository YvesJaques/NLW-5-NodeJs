import {request, response} from "express"

import "./database"

import express from "express";

const app = express();

app.get("/",(request, response) => {
    return response.json({
        message: "Olá mundo!"
    })
})

app.post("/users", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!" })
})

app.listen(3333, () => console.log("Server is running on port 3333"));