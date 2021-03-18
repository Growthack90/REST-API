const frasiDelGiorno = [
    "chi vuol venire dietro di me, prenda la sua croce e mi segua",
    "dove è il tuo tesoro, là sarà anche il tuo cuore",
    "non fare agli altri quel che non vuoi che gli altri facciano a te",
    "fai agli altri quel che vuoi che gli altri facciano a te",
    "non dare le perle ai porci"
];

const fraseDelGiorno = () => {
    const indice = Math.floor(Math.random()*5);
    return {
        messaggio: frasiDelGiorno [indice]
}};

module.exports = fraseDelGiorno;