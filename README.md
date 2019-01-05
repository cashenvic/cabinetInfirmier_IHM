# ClientAngular

Ce projet a été réalisé dans le cadre du projet de fin de semestre d'IHM. Ce projet a pour but de mettre en place une application frontend en angular pour
gérer un cabinet infirmier dont les données sont stockées dans un fichier XML.

Il a été réalisé par [Do Hanh](https://gitlab.com/yakuzHanh) et [Cissé Drissa](https://gitlab.com/Cashenvic).



## Lancement du serveur de développement
Après avoir lancé le serveur, placez vous dans le repertoire du projet et taper la commande `npm start`. L'application s'execute à l'adresse `http://localhost:4200/`.


## Innovations
Après la réalisation des taches demandées, nous avons pris l'initiative d'apporter les modifications suivantes:
- ###### Affichage des actes que doit subir un patient

## Points à dev
###### page de login login.html et secretary.html non dispo

Les pages login.html et secretary.html n'etant pas disponibles sur le serveur nous avons créé une page de login sur laquelle on peut se connecter soit en tant qu'infirmier 
ou en tant que secretaire.

Pour **se connecter en tant que secretaire** il suffit  de `cliquer sur le bouton connecter`.

Pour **se connecter en tant qu'infirmier** il faut renseigner l'`id de l'infirmier`.
Dans les deux cas aucune requête d'authentification n'est envoyée au serveur.
* usage de material angular
