let images = []; // Array per memorizzare i percorsi delle immagini

// Funzione per caricare le immagini dalla cartella selezionata
document.getElementById('imageFolder').addEventListener('change', function(event) {
    images = []; // Resetta l'array delle immagini
    const files = event.target.files; // Ottieni i file selezionati

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Controlla se il file è un'immagine
        if (file.type.startsWith('image/')) {
            const reader = new FileReader(); // Crea un FileReader per leggere l'immagine

            // Quando l'immagine è caricata
            reader.onload = function(e) {
                images.push(e.target.result); // Aggiungi l'immagine all'array
            };

            reader.readAsDataURL(file); // Leggi il file come URL di dati
        }
    }

    // Mostra un messaggio che informa l'utente che le immagini sono state caricate
    document.getElementById('message').innerText = "Immagini caricate! Premi il pulsante per visualizzarne una.";
});

// Funzione per mostrare un'immagine casuale
function showRandomImage() {
    if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length); // Genera un indice casuale
        const imageElement = document.getElementById('randomImage'); // Ottieni l'elemento immagine
        imageElement.src = images[randomIndex]; // Imposta l'immagine casuale come src
    } else {
        alert('Seleziona prima una cartella con immagini.');
    }
}

// Aggiungi un evento al bottone
document.getElementById('showImageButton').addEventListener('click', showRandomImage);
