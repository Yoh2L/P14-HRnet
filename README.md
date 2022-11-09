# Projet OC 14 - Migrer une librairie jQuery vers React

Ce projet consiste a migrer une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end.

Objectifs :

- Convertir l'ensemble du projet HRNet en React.
- Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React existants, coder et publier le dernier soit-même.
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

## Plugins existants utilisés

- Date-picker (src : https://www.npmjs.com/package/react-datepicker )
- Dropdown (src : https://www.npmjs.com/package/react-dropdown)
- React table (src : https://www.material-react-table.com)

## Plugin créé

- React modal (src : https://www.npmjs.com/package/p14-modal-component-library)

  Se référer au lien pour la documentation.

# Installation

- Fork et cloner le repository
- Installer toutes les dépendances ( `npm install`)
- Lancer le projet front-end (`npm start`)

# Dépendances requises :

    	"@emotion/react": "^11.10.4",
    	"@emotion/styled": "^11.10.4",
    	"@mui/icons-material": "^5.10.9",
    	"@mui/material": "^5.10.11",
    	"@reduxjs/toolkit": "^1.8.6",
    	"@testing-library/jest-dom": "^5.16.5",
    	"@testing-library/react": "^13.4.0",
    	"@testing-library/user-event": "^13.5.0",
    	"material-react-table": "^1.2.10",
    	"p14-modal-component-library": "^0.1.7",
    	"react": "^18.2.0",
    	"react-datepicker": "^4.8.0",
    	"react-dom": "^18.2.0",
    	"react-dropdown": "^1.11.0",
    	"react-redux": "^8.0.4",
    	"react-router-dom": "^6.4.2",
    	"react-scripts": "5.0.1",
    	"web-vitals": "^2.1.4"
