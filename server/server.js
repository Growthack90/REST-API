const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const fraseDelGiorno = require("./frasi-del-giorno");

const app = express();

const PORT = 3000;

app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200)
    .send("Hello World!");
});

app.get("/status", (req, res) => {
    res.status(201)
    .send(`Ciao a tutti da porta ${PORT}!`);
});

app.get("/frase-del-giorno", (req, res) => {
    res.status(202)
    .send(fraseDelGiorno());
});


app.listen(PORT, () => {
    console.log(`Server in ascolto alla porta ${PORT}`);
});