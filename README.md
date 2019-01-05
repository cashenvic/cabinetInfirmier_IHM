# ClientAngular

Ce projet a été réalisé dans le cadre du projet de fin de semestre d'IHM. Ce projet a pour but de mettre en place une application frontend en angular pour
gérer un cabinet infirmier dont les données sont stockées dans un fichier XML.

Il a été réalisé par [Do Hanh](https://gitlab.com/yakuzHanh) et [Cissé Drissa](https://gitlab.com/Cashenvic).



## Lancement du serveur de développement
Après avoir lancé le serveur, placez vous dans le repertoire du projet et taper la commande `npm start`. L'application s'execute à l'adresse `http://localhost:4200/`.

## Développement
- ###### Authentification du sécretaire ou de l'infirmier :

Pour **se connecter en tant que sécretaire**, il suffit  de `cliquer sur le bouton connecter`. 

Pour **se connecter en tant qu'infirmier**, il faut renseigner l'`id de l'infirmier`.


- ###### Déconnection du compte

Pour **se déconnecter ** de son compte, il suffit  de `cliquer sur le bouton déconnecter` situé sur la barre du navigateur 
ou aller sur la page de connection correspondant du compte puis de `cliquer sur le bouton déconnecter` . 


On a mis 'des accès restreintes' entre les 2 comptes. L'infirmier ne peut pas accèder au contenu du compte d'un sécretaire et vice versa.


On s'est mis l'idée que l'infirmier ne peut consulter que ses données personnelles et ceux de ses patients 
alors que la sécretaire peut :
- ###### Consulter les données des infirmiers et des patients
- ###### Affectation d'un patient à un infirmier
- ###### Désaffectation d'un patient à son infirmier
- ###### Ajout d'un nouveau patient


## Innovations
Après la réalisation des tâches demandées, nous avons pris l'initiative d'apporter des innovations suivantes:
- ###### Affichage des actes de soins des patients
- ###### Calcul des coûts de soins des patients (on s'est inspiré du projet Voyageur de Santé du Langage Web)
- ###### Modification des données d'un patient (côté sécretaire)


## Points à dev
###### page de login login.html et secretary.html non dispo

Les pages login.html et secretary.html n'etant pas disponibles sur le serveur nous avons créé une page de login sur laquelle on peut se connecter soit en tant qu'infirmier 
ou en tant que secretaire.

Pour **se connecter en tant que secretaire** il suffit  de `cliquer sur le bouton connecter`.

Pour **se connecter en tant qu'infirmier** il faut renseigner l'`id de l'infirmier`.
Dans les deux cas aucune requête d'authentification n'est envoyée au serveur.
* usage de material angular
