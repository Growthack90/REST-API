# example_REST-API

A example of creating of a REST API

Se vuoi avere un idea olistica di quanto fatto, ho diviso lo stato di avanzamento per la creazione dell'applicazione in vari passaggi:

## 1 STEP
Creare una repository [example_REST-API] sia in locale che in remoto (come vedi qui su GitHub.
Inizializziamo il file Package.json, da terminale: $ npm init
Creare file che simula il mio server [server.js]
Lancio l'applicazione da terminale: $ node server.js
Apro il browser e vado all'indirizzo: http://localhost:3000/ per verificare se è tutto ok.
Negli strumenti per sviluppatori nella scheda "Rete" nella sezione "header" se tutto ok, mi restituirà come risposta "200". Se così non fosse, provo a refreshare la pagina.

## 2 STEP
Aggiunta risposta diversa del server (201). Interrompere l'applicazione e rilanciarla da terminale: $ node server.js
Vado all'indirizzo: http://localhost:3000/ per verificare se mi restituisce come risposta "201".

## 3 STEP
Installazione delle dipendenze "nodemon" e "express". Aggiungo degli Endpoint attribuendogli uno status.

## 4 STEP
Creazione di un middleware in express. Installazione della dipendenza "helmet". Creazione di un Endpoint in un file esterno il quale contiene oggetti JSON, contenenti frasi, che verranno restituite in output in modo random.

## Nota
Per clonare l'applicazione, digitare su terminale:
$ git clone [URL_remoto_di_questa_repo]