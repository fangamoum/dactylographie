# Test de Dactylographie React

## Mamady Fangamou
## Projet R4.A.10 - Complément web

## Description du projet

Cette application React permet de tester votre vitesse et votre précision de frappe au clavier. L'utilisateur doit taper un texte donné dans un temps limité (30 secondes) et reçoit un feedback visuel instantané pour chaque mot saisi.

Le projet met en pratique :
1. Gestion d'état avec useReducer
2. Partage global d'état avec useContext
3. Interface utilisateur réactive et moderne en CSS pur

##  Arborescence du projet
  ![Arborescence du projet](/src/assets/arbo.jpg)


## Installation et démarrage

### Cloner le projet
 ```bash
   git clone https://github.com/fangamoum/dactylographie.git

   cd projet-dactylographie

### Installer les dépendances
    npm install

### Lancer l'application (avec Vite)
    npm run dev

### Accéder à l'application
    Ouvrez votre navigateur et rendez-vous à l'adresse :  http://localhost:5173

```
 ###  Fonctionnalités implémentées
 Fonctionnalités de base
 1. Texte à taper : Un texte de référence est affiché à l'écran
 2. Zone de saisie : Champ interactif pour taper le texte
 3. Comparaison caractère par caractère : Feedback visuel en temps réel
 4. Gestion des erreurs : Comptage des mots incorrects
 5. Timer : 30 secondes, démarre au premier caractère saisi
 6. Fin de partie : Blocage de la saisie et affichage du récapitulatif

### Comment jouer ?
1. Commencez à taper dans le champ de saisie
2. Le chronomètre démarre automatiquement
3. Appuyez sur la barre d'espace pour valider chaque mot
4. Observez les couleurs :
5. Vert : mot ou caractère correct
6. Rouge : mot ou caractère incorrect
7. À la fin des 30 secondes, consultez vos statistiques
8. Cliquez sur "Rejouer" pour faire une nouvelle partie

### Technologies utilisées
React 18 - Bibliothèque principale
Vite - Outil de build et développement
CSS pur - Styling sans frameworks externes
Context + useReducer - Gestion d'état globale