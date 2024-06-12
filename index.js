const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3006;

// Charger le dictionnaire
const dictionnairePath = path.join(__dirname, 'dictionnaire.json');
const dictionnaire = JSON.parse(fs.readFileSync(dictionnairePath, 'utf8'));

// Fonction de traduction
function translate(text, direction) {
    // Essayer de trouver une correspondance exacte pour la phrase
    let translatedText = dictionnaire[direction][text.toLowerCase()];

    // Si aucune correspondance exacte n'est trouvée, diviser la phrase en mots
    if (!translatedText) {
        const words = text.split(' ');
        translatedText = words.map(word => dictionnaire[direction][word.toLowerCase()] || word).join(' ');
    }

    return translatedText.trim();
}

// Endpoint pour la traduction
app.get('/translate', (req, res) => {
    const { text, direction } = req.query;
    if (!text || !direction) {
        return res.status(400).send('Les paramètres "text" et "direction" sont requis.');
    }
    const translatedText = translate(text, direction);
    res.send({ translatedText });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur de traduction en écoute sur http://localhost:${PORT}`);
});
