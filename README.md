# Esercizio

### Milestone 1
Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 

Se tutto funziona, passiamo alla prossima milestone

### Milestone 2
Per iniziare, creiamo una cartella data  in cui creare un file che contenga ed esporti l’array di posts allegato ieri.  Importiamo questo file in cima al controller. 

Ora passiamo ad implementare le logiche delle nostre CRUD:

- Index dovrà restituire la lista dei post in formato JSON
- Show dovrà restituire un singolo post in formato JSON
- Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

**Bonus:**

- Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

### Milestone 3
Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store. 

- Impostiamo il verbo e l’endpoint corretti
- Selezioniamo il tab body e scegliamo il formato raw e JSON
- Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

*Nota: se vogliamo avere delle immagini, inventiamole pure.* 

*Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*

### Milestone 4
Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.

Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log 

### Milestone 5
Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.

Testiamolo con postman.

### Milestone 6
Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse. 

**Bonus:**

In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

### Milestone 7
Dopo aver completato tutte le operazioni CRUD, completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.

- Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

### Milestone 8

- Importiamo il db in allegato su MySQL Workbench
- Installiamo il client mysql2 con npm i mysql2 nell’app Express
- Creiamo un file di configurazione per connettere il database
- Inseriamo un console.log nella logica di connessione e proviamo ad avviare l’applicazione per verificare che non ci siano errori.

### Milestone 9

- Facciamo sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON
- Verifichiamo su Postman che la risposta sia corretta

### Milestone 10 

- Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database
- Verifichiamo su Postman che la chiamata non dia errore e risponda 204
- Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso

### Milestone 11

- Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON
- Verifichiamo su Postman che la risposta sia corretta

**Bonus:**

Far sì che la SHOW restituisca il post comprensivo di tag, recuperandoli grazie alla relazione tra post e tags, esistente sul database