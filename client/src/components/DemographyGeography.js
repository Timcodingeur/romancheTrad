import React from 'react';
import suisseGeo from '../images/suisseGeo.png';
import paysageSuisse1 from '../images/paysageSuisse1.jpg';
import paysageSuisse2 from '../images/paysageSuisse2.webp';

function DemographyGeography() {
  return (
    <div>
      <h1>Les langues de Suisse</h1>
      <h2>Démographie et Géographie de la Suisse</h2>
      
      <div className="geography">
        <h2>Géographie</h2>
        <p>
          La Suisse est bordée par l'Allemagne au nord, l'Autriche et le Liechtenstein à l'est-nord-est, l'Italie au sud et au sud-est et la France à l'ouest. C'est un pays sans littoral, dont le Rhin, sécurisé par des traités internationaux, constitue l’unique accès direct à la mer. Le pays est géographiquement divisé entre les Alpes, qui occupent 60 % du territoire, le Plateau suisse et le Jura.
        </p>
        <div className="image-container">
          <img src={paysageSuisse1} alt="Paysage de la Suisse 1" className="geo-image"/>
          <img src={paysageSuisse2} alt="Paysage de la Suisse 2" className="geo-image"/>
        </div>
      </div>

      <div className="demography">
        <h2>Démographie</h2>
        <p>
          Sa population dépasse les 8,9 millions d'habitants, concentrés principalement sur le Plateau, là où se trouvent les plus grandes agglomérations et centres économiques : Zurich et Genève — qui sont des villes mondiales — puis Bâle et Lausanne (qui abrite le Tribunal fédéral). Toutes accueillent des organisations internationales et, pour les trois premières, un aéroport international.
        </p>
      </div>
      <img src={suisseGeo} alt="geo de la suisse" className="geo-image"/>
    </div>
  );
}

export default DemographyGeography;
