A Entreprise Strategy Simulation of an Average Cost Method (on Angular)

# <a href="https://layninou.github.io/StratEnt/">StratEnt</a>

<a href="https://layninou.github.io/StratEnt/">StratEnt (abréviation de Stratégie en Entreprise)</a> est une simulation de jeux d’entreprise permettant de comprendre le modèle CMUP (Coût Unitaire Moyen Pondéré). Ce jeu d’entreprise n’est réalisé actuellement que pour les animateurs. Ils rempliront eux-mêmes les décisions et la simulation réalisera les calculs de situation, charge, exploitation et résultat selon un modèle d’attractions défini par le scénario ou l’animateur.
La Simulation contient : une authentification, une gestion des décisions des équipes, un vue sur les situations des équipes selon la période, un vue sur la comptabilité des équipes selon la période, un vue sur le bilan des équipes selon la période et un changement de période.

### Authentification :
Pour gérer l’ensemble des cessions et animateurs possibles, une création et une récupération des cessions est disponible en page de référence. Si le navigateur est déjà connecté à une cession, il est possible de se déconnecter via la déconnexion dans le menu navigateur.
### Décision :
Chaque équipe/entreprise devra répondre à un certain nombre de décision si il désir participer au jeu. Les équipes devront décider de la production, de la commercialisation, de l’immobilier, des ressources humaines et de diverses décisions exceptionnels
### Situation :
Les pages de situation donnent une vue d’ensemble sur la situation d’une entreprise selon la période. Nous pourrons retrouver sur cette page la structure de l’entreprise, les décisions d’exploitation, et le résultat des ventes.
### Comptabilité :
Les pages de comptabilité donnent une vue sur la comptabilité de l’entreprise à chaque période passé. On y trouve les produits d’exploitation, les charges d’exploitation, les résultats financiers, et les résultats totaux (Net, Exceptionnel, avant impôt…).
### Flux :
Les pages de flux donnent le bilan de l’entreprise à chaque période. On y trouve les actifs et les passifs.
### Etudes :
Les pages d’études montrent le résultat des études choisi par les entreprises à chaque période.
### Nouvelle Période :
Cette page permet de passer à une nouvelle période. On peut y voir les entreprises n’ayant pas encore décidé.


# Autre Service

# Modèle :
Le modèle choisi est celui des attractions. Chaque attraction a un poids et une fonction d’importance. La fonction d’importance ne dépasse jamais la valeur 1.2, ainsi aucune attraction ne peut prendre de l’ascendance sur une autre par un autre moyen que son poids. Après avoir défini la réussite de chaque équipe selon chaque attraction, un calcul de moyenne est réalisée pour définir la part d’importance sur le marché du produit de chaque compagnie.
# Calcul de Résultat :
Un ensemble de calcul réalisé de façon fonctionnel est fait par la simulation. Ces calculs permettent définir les situations, comptabilités et bilan de chaque entreprise.
# Scénario :
Un scénario d’entreprise est disponible : Ordinatix.
