# italianTrainWidget

### le info del tuo treno in un widget iOS

<img src="/img/292F124B-610D-43CB-8CB0-C03544715E67.PNG" width="240">

Con questo widget puoi avere informazioni sullo stato del treno senza dover aprire nessuna applicazione di trasporti.


### Prerequisiti
- Per configurarlo è necessaria 
    - l'app [Scriptable](https://apps.apple.com/it/app/scriptable/id1405459188) installata su un dispositivo con iOS 14 o superiore
    - il [codice della stazione](https://github.com/sabas/trenitalia/blob/master/stazioni.tsv) di partenza per il nostro tragitto (es. "S01700" per Milano Centrale)
    - il numero del treno che si vuole aggiungere come widget (es. "2601" per il treno Milano Centrale - Verona Porta Nuova)
<img src="/img/IMG_6F747E26F8E0-1.jpeg" width="240">    


### Come configurarlo
- [aggiungere un nuovo widget](https://support.apple.com/it-it/HT207122)
- seleziona un widget di tipo Scriptable, **consigliato il secondo formato** del widget e poi tocca Aggiungi widget.

<img src="/img/72B934D9-F08A-4F6A-843F-6108A630C561.PNG" width="240">

- tocca Fine nell'angolo in alto a destra oppure tocca semplicemente la schermata Home.
- tenendo premuto il widget appena aggiunto, potrai configurarlo e associarlo allo script creato in precedenza
    

- copiare l'intero contenuto di [trainWidget.js](/trainWidget.js)

<img src="/img/4AF60A6B-58B9-47B1-98D4-25C6202CD4B5.PNG" width="240">

- modificare il valore di "stazioneOrigine" e "treno" con i codici recuperati in precedenza e salvare
