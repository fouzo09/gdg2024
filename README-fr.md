# Dounkoun - Plateforme de Gestion d'Offres de Livraison

## Table des matières

1. [Introduction](#introduction)
2. [Fonctionnalités](#fonctionnalités)
3. [Architecture](#architecture)
4. [Prérequis](#prérequis)
5. [Installation](#installation)
6. [Déploiement](#déploiement)
7. [Utilisation](#utilisation)
8. [Tests](#tests)
9. [Contribution](#contribution)
10. [Licence](#licence)

## Introduction

Dounkoun est une plateforme de gestion d'offres de livraison de colis. Elle permet aux utilisateurs de publier, rechercher et consulter des offres de transport. Ce projet utilise une architecture serverless basée sur AWS Lambda, avec TypeScript comme langage principal, DynamoDB pour le stockage des données, et AWS SDK v3 pour l'interaction avec les services AWS.

## Fonctionnalités

- **Publication d'offres** : Les utilisateurs peuvent publier des offres de livraison avec des détails tels que la date de départ, la quantité disponible, le pays, la ville et une image.
- **Modification d'offres** : Possibilité d'éditer les offres publiées.
- **Validation d'offres** : Les offres peuvent être marquées comme validées une fois prêtes.
- **Clôture des offres** : Les utilisateurs peuvent clôturer les offres une fois la livraison effectuée ou si elles ne sont plus disponibles.
- **Recherche avancée** : Recherche dans toutes les colonnes de la base de données des offres de livraison.
- **Abonnement aux offres** : Les utilisateurs peuvent s'abonner à des offres spécifiques.
- **Suppression d'offres** : Possibilité de supprimer une offre publiée.

## Architecture

- **Backend** : AWS Lambda (Node.js 20)
- **Base de données** : Amazon DynamoDB
- **Langage** : TypeScript
- **SDK** : AWS SDK v3
- **Framework Serverless** : Serverless Framework

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (v14 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement installé avec Node.js)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Serverless Framework](https://www.serverless.com/)

Vous aurez également besoin :

- D'un compte AWS avec les permissions appropriées pour déployer des ressources Lambda et DynamoDB.
- Des clés d'accès AWS configurées localement.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Donkoun-project/api.git donkoun
   cd dounkoun
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez vos credentials AWS si ce n'est pas déjà fait :
   ```bash
   aws configure
   ```
4. Configurez vos credentials AWS si ce n'est pas déjà fait :
   ```bash
   npm install -g serverless
   ```

## Déploiement

1. Déployez avec Serverless Framework :
   ```bash
   serverless deploy
   ```

## Utilisation

Après le déploiement, Serverless Framework affichera les endpoints API. Utilisez ces URLs pour interagir avec votre application.

Exemple d'utilisation avec curl :

```bash
curl -X POST https://your-api-endpoint.execute-api.region.amazonaws.com/dev/offers \
     -H "Content-Type: application/json" \
     -d '{"departure_date": "2024-01-01", "quantity": 5, "country": "France", "city": "Paris"}'
```

## Tests

Exécutez les tests unitaires :

```bash
npm test
```

Pour les tests d'intégration :

```bash
npm run test:integration
```

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
