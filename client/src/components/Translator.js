import React, { useState } from 'react';
import axios from 'axios';
import romancheImage from '../images/romanche.png';
import rosti from '../images/rosti.jpg';
import fondue from '../images/fondue.png';
import romandie from '../images/romandie.png';
import cuisineTessin from '../images/cuisineTessin.jpg';
import lugano from '../images/lugano.jpg';
import tessin from '../images/tessin-carte.jpg';
import suisseAllemand from '../images/suisseAllemand.webp'

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
        <div className="content-block">
          <p>
            Le romanche (autonyme : rumantsch) est une langue romane parlée par plus de 60 000 personnes en Suisse, essentiellement dans le canton des Grisons. Elle constitue une des trois langues officielles de ce canton avec l'allemand et l'italien, ainsi que la quatrième langue nationale suisse depuis le 20 février 1938 grâce à son référendum fait ce jour-là. Au niveau fédéral, elle est « langue officielle pour les rapports que la Confédération entretient avec les personnes de langue romanche ».
          </p>
        </div>
        <div className="content-block">
          <p>
            Le romanche fait partie des langues rhéto-romanes et est apparenté au ladin et au frioulan, langues parlées dans le nord de l'Italie. Selon le recensement fédéral de la population de 2000, 60 561 résidents de la Suisse parlent cette langue, soit 0,8 % de la population du pays. C'est la langue principale de 35 095 personnes, ce qui représente 0,5 % de l'ensemble des résidents.
          </p>
          <div className="image-text-container">
            <div className="text-container">
              <p>
                La langue n'est usuelle que dans les Grisons, surtout dans les régions d'Albula, de Surselva, d'Engiadina Bassa/Val Müstair et dans les trois quarts de la région de Maloja (Engadine). Elle est aussi pratiquée dans les communes de Cazis, Ferrera et Andeer dans la région de Viamala et à Domat/Ems, Trin, et Felsberg dans la région d'Imboden. Ces territoires représentent environ 40 % du territoire cantonal. Le romanche grison (RG), rumantsch grischun en romanche, est la forme unifiée et standardisée de la langue. Il a été créé et introduit par la Ligue romanche (Lia rumantscha) en 1982. Il est reconnu comme une langue officielle dans les Grisons depuis 1992 et son enseignement est encouragé dans presque toutes les écoles primaires depuis 2010. À présent, les manuels scolaires, les documents cantonaux et fédéraux ainsi que la majorité des publications en romanche sont écrits uniquement en romanche grison.
              </p>
            </div>
            <div className="image-container">
              <img src={romancheImage} alt="Répartition des langues en Suisse" />
            </div>
          </div>
        </div>
        <h2>La Suisse Alémanique</h2>
        <p>
          La Suisse alémanique, ou Suisse allemande, est la partie germanophone de la Suisse, couvrant environ 65 % du pays. Elle doit son nom aux Alamans, un peuple germanique. Environ 5,9 millions de personnes y vivent, soit environ 70 % de la population suisse totale.
        </p>

        <div className="image-text-container">
  <div className="text-container">
    <h3>Toponymie</h3>
    <p>
      Le terme "Suisse allemande" est utilisé depuis au moins 1727, tandis que "Suisse alémanique" apparaît en 1896. Ces termes réfèrent à la langue germanique parlée par les habitants.
    </p>

    <h3>Régions</h3>
    <ul>
      <li>
        <strong>Suisse du nord-ouest</strong> : Inclut Bâle, un centre économique et culturel avec des institutions comme l'Université de Bâle et des entreprises comme Novartis.
      </li>
      <li>
        <strong>Suisse centrale</strong> : Comprend Lucerne, un centre touristique important avec des institutions comme le Tribunal fédéral des assurances.
      </li>
      <li>
        <strong>Suisse orientale et Zurich</strong> : Zurich est le centre économique principal avec des institutions comme l'Université de Zurich et l'EPFZ.
      </li>
      <li>
        <strong>Espace Mittelland et Haut-Valais</strong> : Inclut Berne, la capitale fédérale, et des centres économiques comme Bienne.
      </li>
    </ul>
  </div>
  <div className="image-container">
    <img src={suisseAllemand} alt="Carte de la Suisse allemande" />
  </div>
</div>


        <h3>Identités Suisses Alémaniques</h3>
        <p>
          Les Suisses alémaniques se sentent souvent plus attachés à leur région (Bâle, Berne, Zurich) qu'à l'ensemble de la Suisse alémanique. Le dialecte suisse allemand est largement utilisé dans la vie quotidienne, contrairement à l'usage limité du dialecte en Allemagne.
        </p>

        <div className="image-text-container">
  <div className="text-container">
    <h3>Culture</h3>
    <p>
      La vie culturelle est influencée par les échanges avec la Suisse latine et les coutumes locales. Des musées importants incluent le Kunstmuseum Basel et le Kunsthaus de Zurich.
    </p>

    <h3>Caractéristiques Linguistiques</h3>
    <p>
      Les dialectes suisses allemands sont proches des dialectes germaniques parlés dans les pays voisins. Ils ont maintenu certaines caractéristiques du moyen haut-allemand.
    </p>

    <h3>Plat Traditionnel</h3>
    <p>
      Les rösti, une galette de pommes de terre râpées, sont le plat par excellence de la Suisse alémanique. Chaque région a sa propre recette avec des variations locales.
    </p>
  </div>
  <div className="image-container">
    <img src={rosti} alt="Rösti, plat traditionnel suisse alémanique" />
  </div>
</div>

        <h2>La Suisse Romande</h2>
        <p>
          La Suisse romande, ou Romandie, est la partie francophone de la Suisse, représentant environ 23 % du pays. Les habitants sont appelés Romands.
        </p>

        <div className="image-text-container-left">
  <div className="text-container">
    <h3>Nom et Traductions</h3>
    <p>
      La Suisse romande est également connue sous les noms de Romandie et plus rarement de Suisse française. En allemand, elle est appelée Westschweiz ou Welschland, et en italien Svizzera romanda.
    </p>

    <h3>Géographie</h3>
    <p>
      La Suisse romande se situe dans l'ouest de la Suisse et couvre 9 508,2 km². Elle inclut les cantons de Genève, Jura, Neuchâtel, Vaud, et des parties des cantons de Berne, Fribourg et Valais.
    </p>
    <p>
      Bien que "Romandie" soit couramment utilisé, ce terme n'a pas d'existence politique. La majeure partie de la Romandie appartient au domaine linguistique francoprovençal.
    </p>

    <h3>Étymologie</h3>
    <p>
      Le terme "romand" dérive de "roman", désignant les peuples conquis par Rome et les langues issues du latin tardif. Le terme "Suisse romande" apparaît en 1723 et "Romandie" en 1914.
    </p>

    <h3>Démographie</h3>
    <p>
      La Romandie compte environ 2,14 millions d'habitants, soit 25 % de la population suisse. Les cantons francophones ou bilingues incluent Vaud, Valais, Genève, Berne, Fribourg, Neuchâtel et Jura.
    </p>
  </div>
  <div className="image-container">
    <img src={romandie} alt="Carte de la Suisse romande" />
  </div>
</div>


<div className="image-text-container-left">
  <div className="text-container">
    <h3>Politique</h3>
    <p>
      La Suisse romande n'a pas d'existence politique autonome mais regroupe sept cantons ou parties de cantons. Les différences de sensibilités politiques entre Romands et Alémaniques sont souvent marquées, notamment lors de votations.
    </p>

    <h3>Culture</h3>
    <p>
      La vie culturelle est influencée par la sphère francophone et germanophone, ainsi que par des échanges avec la Suisse latine. La littérature romande est riche, avec des figures comme Jean-Jacques Rousseau et Jacques Chessex.
    </p>
        
    <h3>Cuisine</h3>
    <p>
      La cuisine romande est variée, avec des spécialités comme la fondue, la raclette, le papet vaudois, et des desserts comme les meringues avec crème double du canton de Fribourg.
    </p>
  </div>
  <div className="image-container">
    <img src={fondue} alt="Cuisine Suisse Romande" />
  </div>
</div>

        <h2>La Suisse Italienne</h2>
        <div className="image-text-container">
  <div className="text-container">
    <p>
      La Suisse italienne est la partie italophone de la Suisse, comprenant le canton du Tessin et certaines vallées du sud du canton des Grisons : Val Poschiavo, Val Bregaglia, Val Calanca et Val Mesolcina. Elle couvre une superficie de 3 796,78 km² et comptait 366 481 habitants en 2016.
    </p>
    
    <h3>Infrastructures</h3>
    <p>
      La population italophone dispose de sa propre université depuis 1996, située à Lugano et Mendrisio. Un second établissement d'enseignement supérieur, la Haute école spécialisée de la Suisse italienne (SUPSI), se trouve à Manno et Canobbio.
    </p>
    <p>
      L'Aéroport international de Lugano dessert la région, et les aéroports de Milan-Malpensa et Milan-Linate sont également facilement accessibles.
    </p>
  </div>
  <div className="image-container">
    <img src={tessin} alt="Canton du Tessin" />
  </div>
</div>

<div className="image-text-container">
  <div className="text-container">
    <h3>Culture et Langue</h3>
    <p>
      La culture de la Suisse italienne est fortement influencée par la proximité de l'Italie. L'italien est la langue officielle et largement parlée dans cette région. La région est connue pour ses paysages alpins pittoresques, ses lacs magnifiques comme le lac de Lugano, et ses charmantes villes et villages.
    </p>
    <p>
      La cuisine tessinoise est célèbre pour ses plats traditionnels tels que la polenta, les risotti et divers plats à base de viande et de fromage. La région est également réputée pour ses vins, en particulier le Merlot.
    </p>
  </div>
  <div className="image-container">
    <img src={cuisineTessin} alt="Cuisine Tessinoise" />
  </div>
</div>

<div className="image-text-container">
  <div className="text-container">
    <h3>Économie</h3>
    <p>
      L'économie de la Suisse italienne est diversifiée, comprenant des secteurs tels que les services financiers, le tourisme, l'industrie manufacturière et l'agriculture. Lugano est un important centre financier et commercial, attirant de nombreuses entreprises internationales.
    </p>
    <p>
      Le tourisme joue un rôle crucial dans l'économie locale, avec des visiteurs attirés par les paysages naturels, les activités de plein air, et la riche culture italienne. Les festivals et événements culturels, comme le Festival du film de Locarno, ajoutent à l'attrait touristique de la région.
    </p>
  </div>
  <div className="image-container">
    <img src={lugano} alt="Ville de Lugano" />
  </div>
</div>
      </div>
    </div>
  );
}

export default Translator;
