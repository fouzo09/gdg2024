# Dounkoun - Plateforme de Gestion d'Offres de Livraison

## Table des matières

1. [Introduction](#introduction)
2. [Fonctionnalités](#fonctionnalités)
3. [Architecture](#architecture)
4. [Prérequis](#prérequis)
5. [Installation](#installation)
6. [Déploiement](#déploiement)
7. [Utilisation](#utilisation)
8. [Optiomisation](#optimisation)
9. [Observation](#observation)
10. [Tests](#tests)
11. [Contribution](#contribution)
12. [Licence](#licence)

## Introduction

Ce projet utilise une architecture serverless basée sur AWS Lambda, avec TypeScript comme langage principal, DynamoDB pour le stockage des données, et AWS SDK v3 pour l'interaction avec les services AWS.

## Fonctionnalités

- **Creation etudiant ** : Permet de creer un etudiant
- **Liste etudiant ** : Permet de lister les etudiants

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
   git clone https://github.com/fouzo09/gdg2024.git
   cd gdg2024
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
     -d '{"firstName": "John", "lastName": "Doe", "phone": "0123456789"}'
```

## Optimisation

### Minimiser les package
```
plugins:
  - serverless-esbuild
```
### Ajuster la memoire
```
provider:
  memorySize: 1024    # Configuration globale

functions:
  myFunction:
    memorySize: 2048  # Configuration spécifique à une fonction
```
### Provisionner des concurrency
```
functions:
  myFunction:
    provisionedConcurrency: 5
```

### Reutiliser les initialisations (Connexion a la DB)
```
❌ MAUVAIS : Nouveau client à chaque appel
export const handler = async () => {
  const dynamo = new DynamoDB();
}

✅ BON : Client réutilisé
const dynamo = new DynamoDB();
export const handler = async () => {
  
}
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
