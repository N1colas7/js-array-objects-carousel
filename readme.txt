PROBLEMA : Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello come nella foto allegata.
Milestone 0: Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1: Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2: Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

1 - Creare un array di oggetti con : url immagine,titolo,descrizione;

2 - (Milestone 0) Stilizziamo l'html con un container per poi inserire l'immagine per poi lavorarci sopra e creare un carosello in seguito;

3 - Creiamo le frecce che poi ci faranno scorrere l'immagine(per ora statiche) ;

4 - (Milestone 1) Rimuoviamo i contenuti statici.E aggiungiamoli attraverso js;

5 - Creiamo e aggiungiamo la funzione dello scorrimento delle immagini in aggiunta aggiungiamo titolo e testo alle immagini;

6 - (Milestone 2)Creiamo e aggiungiamo la funzione del ciclo infinito.