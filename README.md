# ClientAngular

Ce projet a été réalisé dans le cadre du projet de fin de semestre d'IHM. Ce projet a pour but de mettre en place une application frontend en angular pour
gérer un cabinet infirmier dont les données sont stockées dans un fichier XML.

Il a été réalisé par [Do Hanh](https://gitlab.com/yakuzHanh) et [Cissé Drissa](https://gitlab.com/Cashenvic).


## Lancement du serveur de développement
Après avoir lancé le serveur, placez vous dans le repertoire du projet et taper la commande `npm start`. L'application s'execute à l'adresse `http://localhost:4200/`.

## Développement
- ###### Authentification du sécretaire ou de l'infirmier :

Pour **se connecter en tant que sécretaire**, il suffit  de `cliquer sur le bouton connecter`. 

Pour **se connecter en tant qu'infirmier**, il faut renseigner l'`id de l'infirmier` puis de `cliquer sur le bouton connecter`.

On a mis `des accès restreintes` entre les 2 comptes. L'infirmier ne peut pas accèder au contenu du compte d'un sécretaire et vice versa.


- ###### Déconnection du compte

Pour **se déconnecter** de son compte, il suffit  de cliquer sur le bouton déconnecter `situé sur la barre du navigateur` ou aller sur `la page de connection` 
correspondant du compte puis de cliquer sur le `bouton déconnecter` . 


On s'est mis l'idée que `l'infirmier ne peut consulter que ses données personnelles et ceux de ses patients` alors que `la sécretaire` peut :
- ###### Consulter les données des infirmiers et des patients
- ###### Affecter un patient à un infirmier
- ###### Réaffecter un patient à un autre infirmier
- ###### Désaffecter un patient à son infirmier
- ###### Ajouter un nouveau patient


## Innovations

Après la réalisation des tâches demandées, nous avons pris l'initiative d'apporter des développement suivantes:
- ###### Affichage des actes de soins des patients
- ###### Calcul des coûts de soins des patients (on s'est inspiré du projet Voyageur de Santé du Langage Web)
- ###### Modification des données d'un patient `côté sécretaire`
- ###### Barre de recherche des noms et/ou prénoms pour les infirmiers et les patients `côté sécretaire`

## Design
Pour une utilisation responsive, on a utilisé :
* usage de material angular
* usage du boostraps
