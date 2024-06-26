import React from 'react';
import argentSuisse from '../images/argentSuisse.webp';
import banqueNational from '../images/banqueNational.jpg';
import feteNational from '../images/feteNational.jpg';

function GeneralInfo() {
  return (
    <div>
      <h2>Informations Générales</h2>

      <div className="economy">
        <h2>Économie</h2>
        <p>
          La Suisse est l'une des économies les plus libérales du continent. Elle a l'un des PIB nominaux par habitant et de parité du pouvoir d'achat les plus élevés au monde, ainsi que l'indice de développement humain (IDH) le plus élevé de la planète (0,962). Elle est classée deuxième sur la liste des pays par espérance de vie, publiée par le DAES des Nations unies ; et est considérée comme l'un des pays les moins corrompus, et — pendant plusieurs années — comme le premier en termes de compétitivité économique et touristique, selon le Forum économique mondial.
        </p>
        <div className="image-container">
          <img src={argentSuisse} alt="Argent Suisse" className="geo-image"/>
          <img src={banqueNational} alt="Banque Nationale Suisse" className="geo-image"/>
        </div>
      </div>

      <div className="national-day">
        <h2>Fête Nationale</h2>
        <p>
          La Fête nationale suisse célèbre chaque 1er août la fondation de la Confédération suisse grâce au pacte d'alliance, datée du mois d'août 1291, entre les trois cantons primitifs : Uri, Schwytz et Unterwald.
        </p>
        <img src={feteNational} alt="Fête Nationale Suisse" className="geo-image"/>
      </div>

      <div className="toponymy">
        <h2>Toponymie</h2>
        <p>
          Dans les autres langues nationales que le français, le pays est appelé Schweiz en allemand, Svizzera en italien et Svizra en romanche. Depuis 1803, le nom officiel de l'entité politique suisse est Confédération suisse en français, Schweizerische Eidgenossenschaft en allemand, Confederazione Svizzera en italien, et Confederaziun svizra en romanche.
        </p>
        <p>
          Au XIXe siècle, le latin servait traditionnellement de langue commune pour les inscriptions officielles. Ainsi, la formule Confœderatio Helvetica se trouve notamment inscrite sur les pièces de monnaie suisses de 5, 10 et 20 centimes et sur les pièces de 5, 10 et 20 francs, mais pas sur les pièces de 50 centimes et de 1 et 2 francs — où ne figure que le nom « Helvetia » — ainsi qu'au fronton du Palais fédéral à Berne. Le sigle CH en est la forme abrégée pour les codes postaux et les extensions de noms de domaine sur Internet. CH figure également sur l'autocollant distinctif de nationalité apposé à l'arrière des véhicules automobiles suisses circulant à l'étranger, en application de la Convention de Vienne sur la circulation routière.
        </p>
      </div>

      <div className="origin">
        <h2>Origine</h2>
        <p>
          Depuis le milieu du XIVe siècle, le terme de confédération est employé pour qualifier les systèmes d'alliance qui se sont formés sur le territoire de la Suisse actuelle. Le mot français, comme ses équivalents dans les langues latines, est issu du latin foedus, « traité d'alliance », alors que l'allemand Eidgenossenschaft renvoie au « serment devant Dieu », Eid, prêté par des Genossen, « compagnons » de même rang. Le mode d'association ainsi désigné contraste avec la dissymétrie des liens de dépendance féodaux.
        </p>
        <p>
          Le nom Schweiz, d'où dérive le français Suisse, est utilisé dès le XVIe siècle par les Autrichiens, par déformation de celui du canton de Schwytz (Switz ou Sweitz en moyen haut allemand) qui est alors le canton géographiquement le plus proche de Vienne parmi les trois cantons d'origine, pour désigner l'ensemble de la communauté révoltée contre eux. Une confusion régna ensuite pendant plusieurs siècles sur l'orthographe utilisée par les deux toponymes (Schwytz et Schweiz). L'historien suisse Johannes von Müller proposa en 1785 de dissocier les deux formes. Le terme de Schwytz, quant à lui, viendrait de celui apparu en 972 pour désigner la population de la région, les Suittes ; ce nom serait lui-même issu du vieux haut allemand swedan signifiant « brûler » (cf. islandais svíða, danois et suédois svide), rappelant ainsi la culture sur brûlis, technique par laquelle les habitants défrichaient les forêts avoisinantes afin de construire ou de cultiver les terrains.
        </p>
      </div>

      <div className="evolution">
        <h2>Évolution</h2>
        <p>
          La proposition de von Müller visant à utiliser l'appellation de Schweiz pour désigner la confédération fut officialisée en 1803, sinon dans l'Acte de Médiation lui-même, du moins par le titre de « Médiateur de la Confédération suisse » que prend Bonaparte à cette occasion. Elle est reprise à l'article 15 du Pacte fédéral de 1815 : « les XXII Cantons se constituent en Confédération suisse », puis par les constitutions de 1848, 1874 et 1999. Aujourd'hui, dans la liste des dénominations d'États publiée par les autorités du pays, c'est celle de Confédération suisse qui est retenue, l'adjectif helvétique étant explicitement exclu.
        </p>
        <p>
          Cependant, au cours d'une évolution historique complexe, inscrite depuis 1848 dans le texte de ses constitutions successives, les institutions de la Suisse se sont éloignées de la confédération d'États pour devenir celles d'un État fédéral. Le maintien en vigueur d'une appellation officielle inchangée, bien qu'elle ne leur corresponde plus (du moins dans les langues latines : en allemand Eidgenossenschaft ne désigne pas une forme politique particulière), exprime l'idée d'une continuité de l'histoire suisse, depuis les alliances médiévales jusqu'à l'État contemporain.
        </p>
      </div>

      <div className="polysémie">
        <h2>Polysémie</h2>
        <p>
          Confédération, avec ou sans majuscule, désigne trois concepts différents, qui correspondent chacun à un mot différent en allemand :
        </p>
        <p>
            <strong>Confédération</strong>, nom commun (allemand <em>Staatenbund</em>) : désigne un « État composé où chaque État-membre conserve son indépendance mais se soumet à un pouvoir central essentiellement constitué par un organisme de coordination dont les décisions doivent être prises à l'unanimité des États-membres ». La Suisse était initialement une confédération, une alliance d'États souverains ligués pour se prêter mutuellement secours. Au XIXe siècle, après l'échec de la République helvétique et face aux nombreux défauts du Pacte fédéral de 1815, des cantons considéraient que cette forme avait fait son temps. Ils ne voulaient cependant pas d'un État unitaire. Ils ont décidé de former un État fédéral, ce qui a été concrétisé par la Constitution fédérale de 1848.
        </p>
        <br/>
        <p>
            <strong>La Confédération</strong>, nom propre (allemand <em>der Bund</em>) : le terme désigne l'État fédéral par opposition aux cantons, les États fédérés. L'État fédéral comprend en particulier l'administration fédérale avec à sa tête le Conseil fédéral, mais aussi l'Assemblée fédérale et les différents tribunaux fédéraux. La Confédération dispose de certaines compétences prévues par la Constitution, comme la monnaie ou l'armée, tandis que les cantons disposent de toutes les compétences non attribuées, comme la police, l'enseignement ou la santé.
        </p>
        <br/>
        <p>
            <strong>La Confédération [suisse]</strong>, nom propre (allemand <em>die [Schweizerische] Eidgenossenschaft</em>) : nom officiel de l'État suisse, du pays, autrement dit de l'ensemble des 26 cantons et du peuple suisse. Le mot allemand Eidgenossenschaft n'est pas l'équivalent linguistique de confédération. Il est composé de Eid, serment devant Dieu, et Genosse, mot qui désigne jusqu'au milieu du XIXe siècle un compagnon, une personne partageant le même sort, les mêmes intérêts et étant du même rang social. On peut le rendre par « Alliance entre égaux scellée par un serment ». Ce terme ne décrit donc pas un régime particulier.
        </p>
      </div>
    </div>
  );
}

export default GeneralInfo;
