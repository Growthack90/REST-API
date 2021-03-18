import generaFrase from "./generatore-di-frase";

console.log("weeeeeee");

fetch("http://localhost:3000/frase-del-giorno")
.then(res => res.json())
.then(res => generaFrase(res.messaggio));