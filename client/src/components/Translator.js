import React, { useState } from 'react';
import axios from 'axios';
import romancheImage from '../images/romanche.png';

function Translator() {
  const [text, setText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('romanche');
  const [toLanguage, setToLanguage] = useState('francais');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.get('/translate', {
        params: {
          text,
          from: fromLanguage,
          to: toLanguage,
        },
      });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error during translation:', error);
    }
  };

  return (
    <div>
      <h1>Les langues de Suisse</h1>
      <h2>traducteur</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Entrez le texte ici..."
      />
      <br />
      <select value={fromLanguage} onChange={(e) => setFromLanguage(e.target.value)}>
        <option value="romanche">Romanche</option>
        <option value="francais">Français</option>
        <option value="suisse_allemand">Suisse Allemand</option>
        <option value="allemand">Allemand</option>
        <option value="italien">Italien</option>
      </select>
      <br />
      <select value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}>
        <option value="romanche">Romanche</option>
        <option value="francais">Français</option>
        <option value="suisse_allemand">Suisse Allemand</option>
        <option value="allemand">Allemand</option>
        <option value="italien">Italien</option>
      </select>
      <br />
      <button onClick={handleTranslate}>Traduire</button>
      <h2>Traduction</h2>
      <textarea
        readOnly
        value={translatedText}
        placeholder="La traduction apparaîtra ici..."
      />
      <div className="anecdotes">
        <h2>Anecdotes sur le Romanche et la Suisse</h2>
        <p>
          Le romanche (autonyme : rumantsch) est une langue romane parlée par plus de 60 000 personnes en Suisse, essentiellement dans le canton des Grisons. Elle constitue une des trois langues officielles de ce canton avec l'allemand et l'italien, ainsi que la quatrième langue nationale suisse depuis le 20 février 1938 grâce à son référendum fait ce jour-là. Au niveau fédéral, elle est « langue officielle pour les rapports que la Confédération entretient avec les personnes de langue romanche ».
        </p>
        <p>
          Le romanche fait partie des langues rhéto-romanes et est apparenté au ladin et au frioulan, langues parlées dans le nord de l'Italie. Selon le recensement fédéral de la population de 2000, 60 561 résidents de la Suisse parlent cette langue, soit 0,8 % de la population du pays. C'est la langue principale de 35 095 personnes, ce qui représente 0,5 % de l'ensemble des résidents.
        </p>
        <div className="image-container">
          <img src={romancheImage} alt="Répartition des langues en Suisse" />
        </div>
        <p>
          La langue n'est usuelle que dans les Grisons, surtout dans les régions d'Albula, de Surselva, d'Engiadina Bassa/Val Müstair et dans les trois quarts de la région de Maloja (Engadine). Elle est aussi pratiquée dans les communes de Cazis, Ferrera et Andeer dans la région de Viamala et à Domat/Ems, Trin, et Felsberg dans la région d'Imboden. Ces territoires représentent environ 40 % du territoire cantonal.
        </p>
        <p>
          Le romanche grison (RG), rumantsch grischun en romanche, est la forme unifiée et standardisée de la langue. Il a été créé et introduit par la Ligue romanche (Lia rumantscha) en 1982. Il est reconnu comme une langue officielle dans les Grisons depuis 1992 et son enseignement est encouragé dans presque toutes les écoles primaires depuis 2010. À présent, les manuels scolaires, les documents cantonaux et fédéraux ainsi que la majorité des publications en romanche sont écrits uniquement en romanche grison.
        </p>
        <h2>Et le suisse allemand</h2>
      </div>
    </div>
  );
}

export default Translator;
