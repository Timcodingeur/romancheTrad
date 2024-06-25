const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3006;

// Charger le dictionnaire
const dictionnairePath = path.join(__dirname, 'dictionnaire.json');
const dictionnaire = JSON.parse(fs.readFileSync(dictionnairePath, 'utf8')).words;

// Fonction de traduction
function translate(text, from, to) {
    let translatedText = '';

    // Essayer de trouver une correspondance exacte pour la phrase
    const exactMatch = dictionnaire.find(entry => entry[from] && entry[from].toLowerCase() === text.toLowerCase());
    if (exactMatch) {
        translatedText = exactMatch[to];
    }

    // Si aucune correspondance exacte n'est trouvée, diviser la phrase en mots
    if (!translatedText) {
        const words = text.split(' ');
        translatedText = words.map(word => {
            const match = dictionnaire.find(entry => entry[from] && entry[from].toLowerCase() === word.toLowerCase());
            return match ? match[to] : word;
        }).join(' ');
    }

    return translatedText.trim();
}

// Endpoint pour la traduction
app.get('/translate', (req, res) => {
    const { text, from, to } = req.query;
    if (!text || !from || !to) {
        return res.status(400).send('Les paramètres "text", "from" et "to" sont requis.');
    }
    const translatedText = translate(text, from, to);
    res.send({ translatedText });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur de traduction en écoute sur http://localhost:${PORT}`);
});
