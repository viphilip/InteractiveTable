# Interactive Table App

Une application web Angular fullstack permettant d'interagir avec un tableau dynamique 10x10 (A1 à J10) avec édition, surbrillance, persistance MongoDB et déploiement Docker.

---

## 🌍 Aperçu

- Angular (frontend)
- Node.js + TypeScript + Express (backend)
- MongoDB (base de données)
- Docker + docker-compose
- Makefile (commande unique de déploiement)

---

## 📄 Fonctionnalités

- 👀 **Affichage d'un tableau 10x10** avec valeurs par défaut
- ✏️ **Édition des cellules** au double-clic (modifiables, sauvegarde automatique)
- 🖐️ **Surbrillance** ligne ou colonne par clic
- 🏘️ **Persistance MongoDB** de chaque cellule
- 🔄 **Bouton de réinitialisation** du tableau (avec régénération)

---

## 📂 Structure du projet

```
    FRONTEND (Angular)
    └── TableComponent, TableService
        └── GET/POST /table

    BACKEND (Node.js)
    └── Express, Mongoose
        ├── table.controller.ts
        ├── table.routes.ts
        └── Table model (row, col, value)

    DATABASE
    └── MongoDB (docker)
    
    DOCKER
    └── docker-compose.yml
        └── Makefile (commandes de déploiement)
``` 

## 🚀 Lancement rapide

### 1. Cloner le projet
```
git clone <repo-url>
cd <repo>
```
### 2. Lancer tous les services (Mongo, backend, frontend)

make up

### 3. Accéder à l'application

http://localhost:4200
