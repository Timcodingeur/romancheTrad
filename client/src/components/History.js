import React from 'react';
import feteNational from '../images/feteNational.jpg';

function History() {
  return (
    <div>
      <h2>Histoire de la Suisse</h2>
      <p>
        La Fête nationale suisse célèbre chaque 1er août la fondation de la Confédération suisse grâce au pacte d'alliance, datée du mois d'août 1291, entre les trois cantons primitifs : Uri, Schwytz et Unterwald.
      </p>
      <img src={feteNational} alt="Fête Nationale Suisse" style={{width: '400px', height: 'auto'}} />
      <p>
        La Suisse a une longue tradition de neutralité politique et militaire et n'a rejoint l'Organisation des Nations unies (ONU) qu'en 2002. Elle poursuit cependant une politique étrangère active et s'implique fréquemment dans des processus humanitaires et de construction de la paix dans le monde.
      </p>
      <p>
        La Suisse est le berceau du Comité international de la Croix-Rouge et abrite de nombreuses organisations internationales, dont le deuxième plus grand siège de l'ONU après celui de New York : l'Office des Nations unies à Genève, ainsi que le siège de la Banque des règlements internationaux à Bâle, le siège de l'Organisation mondiale de la santé à Pregny-Chambésy et le siège du Comité international olympique à Lausanne.
      </p>
      <p>
        Dans le domaine européen, elle est un des membres fondateurs de l'Association européenne de libre-échange et membre de l'espace Schengen, mais pas de l'UE ni de l'Espace économique européen.
      </p>
    </div>
  );
}

export default History;
