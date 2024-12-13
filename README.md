# Dounkoun - Package Delivery Offer Management Platform

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Architecture](#architecture)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Deployment](#deployment)
7. [Usage](#usage)
8. [Tests](#tests)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction

Dounkoun is a package delivery offer management platform. It allows users to publish, search, and view transport offers. This project uses a serverless architecture based on AWS Lambda, with TypeScript as the primary language, DynamoDB for data storage, and AWS SDK v3 for interaction with AWS services.

## Features

- **Offer Publication**: Users can publish delivery offers with details such as departure date, available quantity, country, city, and an image.
- **Offer Modification**: Ability to edit published offers.
- **Offer Validation**: Offers can be marked as validated once ready.
- **Offer Closure**: Users can close offers once delivery is complete or if they are no longer available.
- **Advanced Search**: Search across all columns in the delivery offer database.
- **Offer Subscription**: Users can subscribe to specific offers.
- **Offer Deletion**: Ability to delete a published offer.

## Architecture

- **Backend**: AWS Lambda (Node.js 20)
- **Database**: Amazon DynamoDB
- **Language**: TypeScript
- **SDK**: AWS SDK v3
- **Serverless Framework**: Serverless Framework

## Prerequisites

Before starting, make sure you have installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Serverless Framework](https://www.serverless.com/)

You will also need:

- An AWS account with appropriate permissions to deploy Lambda and DynamoDB resources.
- AWS access keys configured locally.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Donkoun-project/api.git donkoun
   cd dounkoun
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure your AWS credentials if not already done:
   ```bash
   aws configure
   ```

4. Install Serverless Framework globally:
   ```bash
   npm install -g serverless
   ```

## Deployment

1. Deploy with Serverless Framework:
   ```bash
   serverless deploy
   ```

## Usage

After deployment, Serverless Framework will display the API endpoints. Use these URLs to interact with your application.

Example usage with curl:

```bash
curl -X POST https://your-api-endpoint.execute-api.region.amazonaws.com/dev/offers \
     -H "Content-Type: application/json" \
     -d '{"departure_date": "2024-01-01", "quantity": 5, "country": "France", "city": "Paris"}'
```

## Tests

Run unit tests:

```bash
npm test
```

For integration tests:

```bash
npm run test:integration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.# GDG2024
